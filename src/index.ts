import { Application } from './application/Application';
import { eventBus } from './infra/EventBus';
import { cellRepository } from './repository/CellRepository';
import { figureRepository } from './repository/FiguresRepository';

const app = new Application(cellRepository, figureRepository, eventBus);
app.run();