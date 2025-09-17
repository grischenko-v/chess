import { boardMatrix } from "../constants"

export const isBoardCell = (name: string) => {
    const result = false;
    for(let i = 0; i < boardMatrix.length; i++) {
        for(let j = 0; j< boardMatrix[i].length; j++) {
            if(name === boardMatrix[i][j]) {
                return true;
            }
        }
    }
    return result
}