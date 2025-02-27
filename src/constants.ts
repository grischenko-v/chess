import { FigureType } from "./domain/Figure";
import { getBoardMatrix } from "./utils/getBoardMatrix";

export const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
export const rows = ['8', '7', '6', '5', '4', '3', '2', '1'];
export const boardMatrix = getBoardMatrix();

export const BLACK_FIGURES_INITIAL_POSITIONS: Record<FigureType, string[]> = {
    'Pawn': ['a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7'],
    'Rook': ['a8', 'h8'],
    'Bishop': ['b8', 'g8'],
    'Knight': ['c8', 'f8'],
    'Queen': ['e8'],
}

export const WHITE_FIGURES_INITIAL_POSITIONS: Record<FigureType, string[]> = {
    'Pawn': ['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2'],
    'Rook': ['a1', 'h1'],
    'Bishop': ['b1', 'g1'],
    'Knight': ['c1', 'f1'],
    'Queen': ['e1'],
}
