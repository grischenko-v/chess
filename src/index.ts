import { Application } from './application/Application';
import { Board } from './domain/Board';

const app = new Application();

const animate = () => {
    setTimeout(() => app.moveFigure('f7', 'f5'), 0);
    setTimeout(() => app.moveFigure('f5', 'f7'), 3000);
}

setInterval(animate, 10000)

