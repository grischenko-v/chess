import { Board } from './domain/Board';

const board = new Board();

const a7Cell = board.getCell('a7');

const figure = a7Cell.getFigure();

const a6Cell = board.getCell('a6');


const animate = () => {
    setTimeout(() => figure.move(a6Cell.getCellCenter()), 0);
    setTimeout(() => figure.move(a7Cell.getCellCenter()), 2000);
}

setInterval(animate, 2000)

