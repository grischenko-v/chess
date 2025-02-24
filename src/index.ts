import { Board } from './domain/Board';

const board = new Board();

const animate = () => {
    setTimeout(() => board.moveFigure('f7', 'f5'), 0);
    setTimeout(() => board.moveFigure('f5', 'f7'), 3000);
}

setInterval(animate, 10000)

