import { FigureType } from "./domain/Figure";
import { getBoardMatrix } from "./utils/getBoardMatrix";

export const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
export const rows = ['8', '7', '6', '5', '4', '3', '2', '1'];
export const boardMatrix = getBoardMatrix();

// Figure initial positions
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

//COLORS
export const BOARD_BOX_COLOR = 0xce8d66;

export const BOARD_CELL_COLOR = {
    black: 0x231f20,
    white: 0xfaf3e1,
    capture: 0xf75632,
    canMove: 0xf70,
} as const;

export const FIGURE_COLOR = {
    black: 0x2b2b29,
    white:  0xfaf3e1,
    selected: 0x0000f7
}
