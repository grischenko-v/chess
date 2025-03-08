import { BoardCell } from "../domain/BoardCell";

export interface ICellRepository {
    addCell: (cell: BoardCell) => void,
    getCell: (name: string) => BoardCell,
    getBoardCopy: () => Record<string, BoardCell> 
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

    getBoardCopy(): Record<string, BoardCell> {
        return structuredClone(this.#cells);
    }
}

export const cellRepository = new CellRepository();