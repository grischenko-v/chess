import { UIAdater } from "../adapters/SceneAdapter";
import { ROQUE_STEP_MAP, ROQUE_STEP_MAP_KEYS } from "../constants";
import { BoardCell } from "../domain/BoardCell";
import { Figure } from "../domain/Figure";
import { eventBus, eventTypes } from "../infra/EventBus";
import { cellRepository } from "../repository/CellRepository";
import { figureRepository } from "../repository/FiguresRepository";
import { FigureMoveService } from "../service/FigureMoveService";
import { GameManager } from "./GameManager";

export class Application {
    #UIAdater: UIAdater;

    #selectedFigure: Figure | null;
    #figureMoveService: FigureMoveService;
    #gameManager: GameManager;

    constructor(UIAdater: UIAdater) {
        this.#UIAdater = UIAdater;

        this.#figureMoveService = new FigureMoveService();
        this.#gameManager = new GameManager(this.#figureMoveService);

        eventBus.subscribe(eventTypes.cellClick, this.onCellClick.bind(this));
        eventBus.subscribe(eventTypes.figureClick, this.onFigureClick.bind(this));
        eventBus.subscribe(eventTypes.outsideClick, this.onOutsideClick.bind(this));
    }

    private onFigureClick(data: { detail: { clickedFigure: Figure } }) {
        const { detail } = data;
        const { clickedFigure } = detail;

        if(this.getSelectedFigure() && clickedFigure.getCurrentCell().getCanMove()) {
            this.captureFigure(this.getSelectedFigure().getCurrentCell(), clickedFigure.getCurrentCell())
            return;
        }

        if(clickedFigure.getColor() !== this.#gameManager.getCurrentPlayer()) {
            return;
        }

        if(this.getSelectedFigure() && this.getSelectedFigure().getName() !== clickedFigure.getName() ) {
            this.#gameManager.unhighliteMoves(this.#selectedFigure);
            this.#selectedFigure.unselect();
            this.#selectedFigure = clickedFigure;
            this.#selectedFigure.select();
            this.#gameManager.highliteMoves(this.#selectedFigure);
            return;
        }

        if(this.getSelectedFigure()) {
            this.#gameManager.unhighliteMoves(this.#selectedFigure);
            this.#selectedFigure.unselect();
            return;
        }

        this.#selectedFigure = clickedFigure;
        this.#selectedFigure.select();
        this.#gameManager.highliteMoves(this.#selectedFigure);
    }

    private onCellClick(data: { detail: { clickedCell: BoardCell } }) {
        const { detail } = data;
        const { clickedCell: destinationCell } = detail;
        if(!this.#selectedFigure) {
            return;
        }

        const currentCell = this.#selectedFigure.getCurrentCell();

        if(destinationCell.getCanMove() && destinationCell.hasFigure() && destinationCell.hasFigureColor() !== this.#selectedFigure.getColor()) {
            this.captureFigure(currentCell, destinationCell)
            return;
        }

        if(destinationCell.getCanMove()) {
            this.moveFigure(currentCell, destinationCell);
            return;
        }

        this.#gameManager.unhighliteMoves(this.#selectedFigure);
        this.#selectedFigure.unselect();
        this.#selectedFigure = null;
    }

    private onOutsideClick() {
        if(this.getSelectedFigure()) {
            this.#gameManager.unhighliteMoves(this.#selectedFigure);
            this.#selectedFigure.unselect();
            this.#selectedFigure = null;
        }
    }

    private getSelectedFigure() {
        return this.#selectedFigure;
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
        this.#selectedFigure = null;

        const roque = ROQUE_STEP_MAP[destinationCell.getCellName() as ROQUE_STEP_MAP_KEYS];
        if(selectedFigureType === 'King' && roque) {
            const rookCell = cellRepository.getCell(roque.rookDefualtCellName);
            const rookDestinatioCell = cellRepository.getCell(roque.rookDestinationCellName);
            const rook = rookCell.getFigure();
            rook.move(rookDestinatioCell);
            rookDestinatioCell.setFigure(rook);
            rookCell.setFigure(null);
        }
        this.#gameManager.toggleCurrentPlayer();
        if(this.#gameManager.isKingUnderCheck()) {
            console.log(`${this.#gameManager.getCurrentPlayer()} - check`)
        }
        if(this.#gameManager.isGameFinished()) {
            console.log(`${this.#gameManager.getCurrentPlayer()} - loose`)
        };
    }

    private captureFigure(currentCell: BoardCell, destinationCell: BoardCell) {
        const capturedFigure = destinationCell.getFigure();
        this.#UIAdater.remove(capturedFigure.getFigure());
        figureRepository.deleteFigure(capturedFigure);

        this.moveFigure(currentCell, destinationCell);
    }
}