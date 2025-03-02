import { UIAdater } from "../adapters/SceneAdapter";
import { ROOK_DEFUALT_CELLS_NAMES, ROQUE_STEP_MAP, ROQUE_STEP_MAP_KEYS } from "../constants";
import { BoardCell } from "../domain/BoardCell";
import { Figure } from "../domain/Figure";
import { eventBus, eventTypes } from "../infra/EventBus";
import { cellRepository } from "../repository/CellRepository";
import { figureRepository } from "../repository/FiguresRepository";
import { FigureMoveService } from "../service/FigureMoveService";

export class Application {
    #UIAdater: UIAdater;

    #selectedFigure: Figure | null;
    #figureMoveService: FigureMoveService;

    constructor(UIAdater: UIAdater) {
        this.#UIAdater = UIAdater;

        this.#figureMoveService = new FigureMoveService();

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

        if(this.getSelectedFigure() && this.getSelectedFigure().getName() !== clickedFigure.getName() ) {
            this.#figureMoveService.unhighliteMoves(this.#selectedFigure);
            this.#selectedFigure.unselect();
            this.#selectedFigure = clickedFigure;
            this.#selectedFigure.select();
            this.#figureMoveService.highliteMoves(this.#selectedFigure);
            return;
        }

        if(this.getSelectedFigure()) {
            this.#figureMoveService.unhighliteMoves(this.#selectedFigure);
            this.#selectedFigure.unselect();
            return;
        }

        this.#selectedFigure = clickedFigure;
        this.#selectedFigure.select();
        this.#figureMoveService.highliteMoves(this.#selectedFigure);
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

        this.#figureMoveService.unhighliteMoves(this.#selectedFigure);
        this.#selectedFigure.unselect();
        this.#selectedFigure = null;
    }

    private onOutsideClick() {
        if(this.getSelectedFigure()) {
            this.#figureMoveService.unhighliteMoves(this.#selectedFigure);
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
        const selectedFigureStepCount = this.#selectedFigure.getStepNumber();
        this.#figureMoveService.unhighliteMoves(this.#selectedFigure);
        this.#selectedFigure.unselect();
        this.#selectedFigure.move(destinationCell);
        currentCell.setFigure(null);
        destinationCell.setFigure(this.#selectedFigure);
        this.#selectedFigure = null;

        const roque = ROQUE_STEP_MAP[destinationCell.getCellName() as ROQUE_STEP_MAP_KEYS];
        if(selectedFigureType === 'King' && roque && selectedFigureStepCount === 0) {
            const rookCell = cellRepository.getCell(roque.rookDefualtCellName);
            const rookDestinatioCell = cellRepository.getCell(roque.rookDestinationCellName);
            const rook = rookCell.getFigure();
            if(rook.getStepNumber() !== 0 || rook.getType() !== 'Rook') {
                return;
            }
            rook.move(rookDestinatioCell);
            rookDestinatioCell.setFigure(rook);
            rookCell.setFigure(null);
        }
    }

    private captureFigure(currentCell: BoardCell, destinationCell: BoardCell) {
        const capturedFigure = destinationCell.getFigure();
        this.#UIAdater.remove(capturedFigure.getFigure());
        figureRepository.deleteFigure(capturedFigure);

        this.moveFigure(currentCell, destinationCell);
    }
}