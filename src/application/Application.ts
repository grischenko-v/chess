import { UIAdater } from "../adapters/SceneAdapter";
import { BoardCell } from "../domain/BoardCell";
import { Figure } from "../domain/Figure";
import { IEventBus } from "../infra/EventBus";
import { IFigureRepository } from "../repository/FiguresRepository";
import { FigureMoveService } from "../service/FigureMoveService";

export class Application {
    #UIAdater: UIAdater;

    #figureRepository: IFigureRepository;
    #eventBus: IEventBus;
    #selectedFigure: Figure | null;
    #figureMoveService: FigureMoveService;

    constructor(figureRepository: IFigureRepository, eventBus: IEventBus, UIAdater: UIAdater) {
        this.#figureRepository = figureRepository;
        this.#eventBus = eventBus;
        this.#UIAdater = UIAdater;

        this.#figureMoveService = new FigureMoveService();

        this.#eventBus.subscribe('cellClick', this.onCellClick.bind(this));
        this.#eventBus.subscribe('figureClick', this.onFigureClick.bind(this));
        this.#eventBus.subscribe('outsideClick', this.onOutsideClick.bind(this));
    }

    private onFigureClick(data: { detail: { figure: Figure } }) {
        const { detail } = data;
        const { figure } = detail;

        if(this.getSelectedFigure() && figure.getCurrentCell().getCanMove()) {
            this.captureFigure(this.getSelectedFigure().getCurrentCell(), figure.getCurrentCell())
            return;
        }

        if(this.getSelectedFigure() && this.getSelectedFigure().getName() !== figure.getName() ) {
            this.#figureMoveService.unhighliteMoves(this.#selectedFigure);
            this.#selectedFigure.unselect();
            this.#selectedFigure = figure;
            this.#selectedFigure.select();
            this.#figureMoveService.highliteMoves(this.#selectedFigure);
            return;
        }

        if(this.getSelectedFigure()) {
            this.#figureMoveService.unhighliteMoves(this.#selectedFigure);
            this.#selectedFigure.unselect();
            return;
        }

        this.#selectedFigure = figure;
        this.#selectedFigure.select();
        this.#figureMoveService.highliteMoves(this.#selectedFigure);
    }

    private onCellClick(data: { detail: { cell: BoardCell } }) {
        const { detail } = data;
        const { cell: destinationCell } = detail;
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
        this.#figureMoveService.unhighliteMoves(this.#selectedFigure);
        this.#selectedFigure.unselect();
        this.#selectedFigure.move(destinationCell);
        currentCell.setFigure(null);
        destinationCell.setFigure(this.#selectedFigure);
        this.#selectedFigure = null;
    }

    private captureFigure(currentCell: BoardCell, destinationCell: BoardCell) {
        const capturedFigure = destinationCell.getFigure();
        this.#UIAdater.remove(capturedFigure.getFigure());
        this.#figureRepository.deleteFigure(capturedFigure);

        this.moveFigure(currentCell, destinationCell);
    }
}