import { HTMLAdapter } from "../adapters/HTMLAdapter";
import type { UIAdater } from "../adapters/SceneAdapter";
import { BoardCell } from "../domain/BoardCell";
import { Figure, type FigureType } from "../domain/Figure";
import { eventBus, eventTypes } from "../../infra/EventBus";
import { cellRepository } from "../repository/CellRepository";
import { figureRepository } from "../repository/FiguresRepository";
import { GameManager } from "./GameManager";
import { FigureMoveEvent, type FigureMoveEventDTO } from "@/infra/FigureMoveEvent";

export class Application {
    #UIAdater: UIAdater;

    #selectedFigure: Figure | null = null;
    #gameManager: GameManager;
	#figureMoveEvent: FigureMoveEvent | null = null;
	#moves:string[] = []
	#transformation = false;

    constructor(UIAdater: UIAdater) {
        this.#UIAdater = UIAdater;
        this.#gameManager = new GameManager();
		new HTMLAdapter();

        eventBus.subscribe(eventTypes.cellClick, this.onCellClick.bind(this));
        eventBus.subscribe(eventTypes.figureClick, this.onFigureClick.bind(this));
        eventBus.subscribe(eventTypes.outsideClick, this.onOutsideClick.bind(this));
		eventBus.subscribe(eventTypes.revertFigureMove, this.onRevertFigureMove.bind(this));
		eventBus.subscribe(eventTypes.nextStepResponse, this.onNextStepResponse.bind(this));
		eventBus.subscribe(eventTypes.figureMove, this.collectMoves.bind(this));
		eventBus.subscribe(eventTypes.revertFigureMove, this.revertMove.bind(this));
		eventBus.subscribe(eventTypes.helpRequest, this.onHelpReuest.bind(this));
		eventBus.subscribe(eventTypes.pawnTransformResponse, this.onPawnTransformResponse.bind(this));
    }

	private onPawnTransformResponse(data: unknown) {
		const { detail } = data as { detail: { figureType: FigureType, figureName: string }};
		this.#selectedFigure?.setType(detail.figureType);
		this.#transformation = false;
		this.#figureMoveEvent?.setTransform(detail.figureType)
	}

    private onNextStepResponse(data: unknown) {
		const { detail } = data as {detail: {nextStep: string, helpReuest: boolean}}
		if(!detail.helpReuest) {
			return;
		}
		const move = this.parseUCIMove(detail.nextStep);

		if(!move?.from || !move.to) {
			throw new Error('wrong respones' + detail.toString());
		}

		const currentCell = cellRepository.getCell(move?.from);
		const currentFigure = currentCell.getFigure();
		const destinationCell = cellRepository.getCell(move?.to);
		this.onFigureClick({
			detail: {
				clickedFigure: currentFigure
			}
		})
		this.onCellClick( {detail: {
			clickedCell: destinationCell
		}});	
    }

	private parseUCIMove(str: string) {
		const m = str.trim().toLowerCase().match(
			/^([a-h][1-8])([a-h][1-8])([qrbn])?$/
		);
		if (!m) return null;

		return {
			from: m[1],
			to: m[2],
			promotion: m[3] ?? null
		};
	}

	private collectMoves(data: unknown) {
		const { detail } = data as {detail : {value: { currentCell: string, destinationCell: string }}};
		this.#moves.push(`${detail.value.currentCell}${detail.value.destinationCell}`)
	}

	private revertMove() {
		this.#moves.pop();
	}

	private onHelpReuest() {
		eventBus.dispatchEvent(eventTypes.nextStepRequest, {moves: this.#moves.join(' '), helpReuest: true});	 
	}

    private onFigureClick(data: unknown) {
        const { detail } = data as { detail: { clickedFigure: Figure }};
        const { clickedFigure } = detail;

        if(this.#selectedFigure && clickedFigure.getCurrentCell().getCanMove()) {
			this.onCellClick({ detail: { clickedCell: clickedFigure.getCurrentCell() } })
            return;
        }

        if(clickedFigure.getColor() !== this.#gameManager.getCurrentPlayer()) {
            return;
        }

        if(this.#selectedFigure && this.#selectedFigure.getName() !== clickedFigure.getName() ) {
            this.#gameManager.unhighliteMoves(this.#selectedFigure);
            this.#selectedFigure.unselect();
            this.#selectedFigure = clickedFigure;
            this.#selectedFigure.select();
            this.#gameManager.highliteMoves(this.#selectedFigure);
            return;
        }

        if(this.#selectedFigure) {
            this.#gameManager.unhighliteMoves(this.#selectedFigure);
            this.#selectedFigure.unselect();
            return;
        }

        this.#selectedFigure = clickedFigure;
        this.#selectedFigure.select();
        this.#gameManager.highliteMoves(this.#selectedFigure);
    }

    private async onCellClick(data: unknown) {
        const { detail } = data as { detail: { clickedCell: BoardCell }};
        const { clickedCell: destinationCell } = detail;

        if(!this.#selectedFigure) {
            return;
        }
        const currentCell = this.#selectedFigure.getCurrentCell();

		this.#figureMoveEvent = new FigureMoveEvent(
					this.#selectedFigure,
					currentCell.getCellName(),
					destinationCell.getCellName());

		await this.pawnTransformation(destinationCell);

        if(this.tryEnPassantCapture(destinationCell, currentCell)) {
            return;
        }

        if(this.tryRegularCapture(destinationCell, currentCell)) {
            return
        }

        if(this.tryMoveFigure(destinationCell, currentCell)) {
            return;
        }

        this.unselectFigure();
    }

	private async pawnTransformation(destinationCell: BoardCell) {
		if(this.checkTransformationPosibility(destinationCell)) {
			eventBus.dispatchEvent(eventTypes.pawnTransformRequest,{
				currentColor: this.#gameManager.getCurrentPlayer(),
				figureName: this.#selectedFigure?.getName(),
			});
			this.#transformation = true;
		}
		await this.isTransforamtionCompilte();
	}

	private checkTransformationPosibility(destinationCell: BoardCell) {
		const destinationCellFigure = this.#selectedFigure;
		if(!destinationCellFigure) {
			return false;
		}

		const transformWhite = destinationCellFigure.getType() === 'Pawn' && 
			destinationCellFigure.getColor() === 'white' && 
			destinationCell.getCellColumn() === '8';
		const transformBlack = destinationCellFigure.getType() === 'Pawn' && 
			destinationCellFigure.getColor() === 'black' && 
			destinationCell.getCellRow() === 'f';
		if(transformWhite || transformBlack) {
			return true;
		}
		return false;
	}

	private async isTransforamtionCompilte () {
		return new Promise<void>((resolve) => {
			const checkIsTransformationComplite = () => {
				if(!this.#transformation) {
					resolve();
				} else {
					setTimeout(checkIsTransformationComplite, 100);
				}
			}
			checkIsTransformationComplite();
		});
	}

	private onRevertFigureMove(data: unknown) {
		const { detail } = data as { detail: FigureMoveEventDTO};
		this.revertFigureMove(detail);
	}

	private revertFigureMove(data: FigureMoveEventDTO) {
		const destinationCell = cellRepository.getCell(data.destinationCell);
		const destinationCellFigure = destinationCell.getFigure();
		const currentCell = cellRepository.getCell(data.currentCell);
		const cupturedFigure = null;
		this.#gameManager.toggleCurrentPlayer();
		if(this.#selectedFigure) {
			this.#selectedFigure.unselect();
			this.#gameManager.unhighliteMoves(this.#selectedFigure);
		}
		this.#selectedFigure = destinationCellFigure;
		if(!this.#selectedFigure) {
			return;
		}

		this.#gameManager.unhighliteMoves(this.#selectedFigure);
        this.#selectedFigure.unselect();
        this.#selectedFigure.revert(currentCell);
        destinationCell.setFigure(cupturedFigure);
		currentCell.setFigure(this.#selectedFigure);
        this.#selectedFigure = null;
		if(data.capture) {
			this.#UIAdater.initFigure(
				data.enPassant ? data.enPassant : data.destinationCell,
				this.#gameManager.getSecondPlayerColor(),
				data.capture
			);
		}
		if(data.rouqe) {
			const rookDestinatioCell = cellRepository.getCell(data.rouqe.rookDestinatioCell);
			const rookCell = cellRepository.getCell(data.rouqe.rookCell);
			const rook = rookDestinatioCell.getFigure();
			if(!rook) {
				return;
			}
			rook.move(rookCell);
            rookDestinatioCell.setFigure(null);
            rookCell.setFigure(rook);
		}
		if(data.transform) {
			const figure = currentCell.getFigure();
			if(!figure) {
				return;
			}
			setTimeout(() => {
				this.#UIAdater.remove(figure.getFigure());
				this.#UIAdater.initFigure(
						currentCell.getCellName(),
						this.#gameManager.getCurrentPlayer(),
						'Pawn'
					);}, 1000);
		}
	}

    private tryEnPassantCapture(destinationCell: BoardCell, currentCell: BoardCell) {
        if(!this.#selectedFigure) {
            return false;
        }
        const rightSiblingCellName = currentCell.getRightSibling(this.#selectedFigure.getColor());
        const rightSiblingCell = cellRepository.getCell(rightSiblingCellName);
        const currentCellFigure = currentCell.getFigure();
        if(destinationCell.getCanMove() && !destinationCell.hasFigure() && currentCellFigure &&  currentCellFigure.getType() === 'Pawn'
            && rightSiblingCell && rightSiblingCell.canEnPassantCupture(this.#selectedFigure.getColor())
            && destinationCell.getCellRow() === rightSiblingCell.getCellRow() && this.#figureMoveEvent
            ) {  
				this.#figureMoveEvent.setIsCapture(rightSiblingCell.getFigure()?.getType());
				this.#figureMoveEvent.isEnPassant(rightSiblingCellName);
				this.captureFigureEnPassant(currentCell, destinationCell, rightSiblingCell);
				
                return true;
        }
        
        const leftSiblingCellName = currentCell.getLeftSibling(this.#selectedFigure.getColor());
        const leftSiblingCell = cellRepository.getCell(leftSiblingCellName);
        if(destinationCell.getCanMove() && !destinationCell.hasFigure() && currentCellFigure && currentCellFigure.getType() === 'Pawn'
            && leftSiblingCell && leftSiblingCell.canEnPassantCupture(this.#selectedFigure.getColor())
            && destinationCell.getCellRow() === leftSiblingCell.getCellRow() && this.#figureMoveEvent
            ) {
				this.#figureMoveEvent.setIsCapture(leftSiblingCell.getFigure()?.getType())
				this.#figureMoveEvent.isEnPassant(leftSiblingCellName);
                this.captureFigureEnPassant(currentCell, destinationCell, leftSiblingCell);
                return true;
        }

        return false;
    }

    private tryRegularCapture(destinationCell: BoardCell, currentCell: BoardCell) {
        if(!this.#selectedFigure) {	
            return false;
        }

        if(destinationCell.getCanMove() && destinationCell.hasFigure() && destinationCell.hasFigureColor() !== this.#selectedFigure.getColor() && this.#figureMoveEvent) {
			this.#figureMoveEvent.setIsCapture(destinationCell.getFigure()?.getType());
            this.captureFigureRegular(currentCell, destinationCell)
			return true;
        }
        return false;
    }

    private tryMoveFigure(destinationCell: BoardCell, currentCell: BoardCell){
        if(destinationCell.getCanMove() && this.#selectedFigure &&  this.#figureMoveEvent) {
            this.moveFigure(currentCell, destinationCell);
            return true;
        }
        return false;
    }

    private unselectFigure() {
        if(!this.#selectedFigure) {
            return;
        }
        this.#gameManager.unhighliteMoves(this.#selectedFigure);
        this.unSelectCurrentFigure();
    }

    private onOutsideClick() {
        if(!this.#selectedFigure) {
            return;
        }
        this.#gameManager.unhighliteMoves(this.#selectedFigure);
        this.unSelectCurrentFigure();
    }

    private unSelectCurrentFigure() {
        if(!this.#selectedFigure) {
            return;
        }
        this.#selectedFigure.unselect();
        this.#selectedFigure = null;
    }

    private moveFigure(currentCell: BoardCell, destinationCell: BoardCell) {
        if(!this.#selectedFigure) {
            return;
        }

        const selectedFigureType = this.#selectedFigure.getType();
        this.#gameManager.unhighliteMoves(this.#selectedFigure);
        this.#selectedFigure.unselect();
        this.#selectedFigure.move(destinationCell);
        currentCell.setFigure(null);

		destinationCell.setFigure(this.#selectedFigure);
	
        const roque = this.#gameManager.isRoqueAvailable(destinationCell);
        if(selectedFigureType === 'King' && roque) {
            const rookCell = cellRepository.getCell(roque.rookDefualtCellName);
            const rookDestinatioCell = cellRepository.getCell(roque.rookDestinationCellName);
            const rook = rookCell.getFigure();
            if(rook) {
                rook.move(rookDestinatioCell);
                rookDestinatioCell.setFigure(rook);
                rookCell.setFigure(null);
				this.#figureMoveEvent?.isRouqe({
					rookDestinatioCell: roque.rookDestinationCellName,
					rookCell: roque.rookDefualtCellName,
				});
            }
        }
        
        this.#gameManager.toggleCurrentPlayer();
		if(!this.#figureMoveEvent) {
			throw new Error('no figure move event');
		}
        if(this.#gameManager.isKingUnderCheck()) {
			this.#figureMoveEvent.isCheck(true);
        }
        if(this.#gameManager.isGameFinished()) {
			this.#figureMoveEvent.isGameEnd(true);
        };
		const figuremoveEvent = this.#figureMoveEvent.toJson();
		eventBus.dispatchEvent('figureMove', { value: figuremoveEvent});
		this.animatePawnTransformation(figuremoveEvent);
		
		this.#figureMoveEvent = null;
		this.#selectedFigure = null;
    }

	private animatePawnTransformation(figuremoveEvent: FigureMoveEventDTO) {
		if(!this.#selectedFigure) {
			return;
		}
		const figure = this.#selectedFigure.getFigure();
		setTimeout(() =>{
			if(figuremoveEvent.transform) {
				this.#UIAdater.initFigure(
					figuremoveEvent.destinationCell,
					figuremoveEvent.figureColor,
					figuremoveEvent.transform
				);
				this.#UIAdater.remove(figure);
			}
		}, 1000);
	}

    private captureFigureRegular(currentCell: BoardCell, destinationCell: BoardCell) {
        const capturedFigure = destinationCell.getFigure();
        if(!capturedFigure) {
            return;
        }
       this.captureFigure(capturedFigure, currentCell, destinationCell);
    }

    private captureFigureEnPassant(currentCell: BoardCell, destinationCell: BoardCell, cupturedCell: BoardCell) {
        const capturedFigure = cupturedCell.getFigure();
        if(!capturedFigure) {
            return;
        }
        this.captureFigure(capturedFigure, currentCell, destinationCell);
    }

	private captureFigure(capturedFigure: Figure, currentCell: BoardCell, destinationCell: BoardCell) {
		this.#UIAdater.remove(capturedFigure.getFigure());
        figureRepository.deleteFigure(capturedFigure);
        this.moveFigure(currentCell, destinationCell);
	}
}