import { Application } from './application/Application';
import { Board } from './domain/Board';
import { cellRepository } from './repository/CellRepository';

const app = new Application(cellRepository);

const animate = () => {
    setTimeout(() => app.moveFigure('f7', 'f5'), 0);
    setTimeout(() => app.moveFigure('f5', 'f7'), 3000);
}

setInterval(animate, 10000)

