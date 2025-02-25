import { boardMatrix } from "../constants";
import { TSiblings } from "../domain/BoardCell";

export const getCellSublings = (cellName: string): TSiblings => {
    let cellI, cellJ;
    for(let i = 0; i < boardMatrix.length; i++) {
        for(let j = 0; j < boardMatrix[i].length; j++) {
            if(boardMatrix[i][j] === cellName) {
                cellI = i;
                cellJ = j;
            }
        }
    }

    return {
        bottom: boardMatrix[cellI + 1] ? boardMatrix[cellI + 1][cellJ] : null,
        top: boardMatrix[cellI - 1] ? boardMatrix[cellI - 1][cellJ] : null,
        left: boardMatrix[cellI][cellJ - 1] ?? null,
        right: boardMatrix[cellI][cellJ + 1] ?? null,
        bottomLeft:  boardMatrix[cellI + 1] ? boardMatrix[cellI + 1][cellJ - 1] : null,
        bottomRight:  boardMatrix[cellI + 1] ? boardMatrix[cellI + 1][cellJ + 1] : null,
        topLeft:  boardMatrix[cellI - 1] ? boardMatrix[cellI - 1][cellJ - 1] : null,
        topRight:  boardMatrix[cellI - 1] ? boardMatrix[cellI - 1][cellJ + 1] : null,
    }
}