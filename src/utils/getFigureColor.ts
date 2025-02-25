import { FigureColor } from "../domain/Figure";

export const getFigureColor = (color: FigureColor) =>  color === 'black' ? 0x2b2b29 : 0xfaf3e1;