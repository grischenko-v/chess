import type { FigureType } from "./domain/Figure";

export const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
export const rows = ['1', '2', '3', '4', '5', '6', '7', '8'];
export const boardMatrix = getBoardMatrix();

// Figure initial positions
export const BLACK_FIGURES_INITIAL_POSITIONS: Record<FigureType, string[]> = {
    'Pawn': ['a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7'],
    'Rook': ['a8', 'h8'],
    'Knight': ['b8', 'g8'],
    'Bishop': ['c8', 'f8'],
    'Queen': ['d8'],
    'King': ['e8'],
}

export const WHITE_FIGURES_INITIAL_POSITIONS: Record<FigureType, string[]> = {
    'Pawn': ['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2'],
    'Rook': ['a1', 'h1'],
    'Knight': ['b1', 'g1'],
    'Bishop': ['c1', 'f1'],
    'Queen': ['d1'],
    'King': ['e1'],
}

// for get roque figures position 
export const ROQUE_STEP_MAP = {
    'c1': {
        rookDefualtCellName: 'a1',
        rookDestinationCellName: 'd1',
    },
    'g1': {
        rookDefualtCellName: 'h1',
        rookDestinationCellName: 'f1',
    },
    'c8': {
        rookDefualtCellName: 'a8',
        rookDestinationCellName: 'd8',
    },
    'g8': {
        rookDefualtCellName: 'h8',
        rookDestinationCellName: 'f8',
    },
} as const;

export type ROQUE_STEP_MAP_KEYS = keyof typeof ROQUE_STEP_MAP;

export const ROOK_DEFUALT_CELLS_NAMES = [...WHITE_FIGURES_INITIAL_POSITIONS['Rook'], ...BLACK_FIGURES_INITIAL_POSITIONS['Rook']];

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

function getBoardMatrix(): string[][] {
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