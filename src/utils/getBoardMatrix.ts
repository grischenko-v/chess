import { columns, rows } from "../constants";

export const getBoardMatrix = (): string[][] => {
    const boardMatrix: string[][] = [];
    let counter = 0;
    for(let row of rows) {
        boardMatrix.push([]);
        for(let column of columns) {
            boardMatrix[counter].push(`${column}${row}`);
        }
        counter++;
    }
    return boardMatrix;
}
