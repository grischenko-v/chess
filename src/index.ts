import { Application } from './application/Application';
import { cellRepository } from './repository/CellRepository';
import { figureRepository } from './repository/FiguresRepository';

const app = new Application(cellRepository, figureRepository);

const animate = () => {
    setTimeout(() => app.moveFigure('f7', 'f5'), 0);
    setTimeout(() => app.moveFigure('f5', 'f7'), 3000);
}

setInterval(animate, 10000)

