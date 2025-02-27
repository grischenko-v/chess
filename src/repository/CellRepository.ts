import { BoardCell } from "../domain/BoardCell";

export interface ICellRepository {
    addCell: (cell: BoardCell) => void,
    getCell: (name: string) => BoardCell 
}

class CellRepository implements ICellRepository {
    #cells: Record<string, BoardCell> = {};

    addCell(cell: BoardCell) {
        const name = cell.getCellName();
        this.#cells[name] = cell;
    }

    getCell(name: string): BoardCell {
        return this.#cells[name];
    }
}

export const cellRepository = new CellRepository();