import { Application } from './application/Application';
import { cellRepository } from './repository/CellRepository';
import { figureRepository } from './repository/FiguresRepository';

const app = new Application(cellRepository, figureRepository);


