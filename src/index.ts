import { sceneAdater } from './adapters/SceneAdapter';
import { Application } from './application/Application';
import { eventBus } from './infra/EventBus';
import { figureRepository } from './repository/FiguresRepository';

new Application(figureRepository, eventBus, sceneAdater);