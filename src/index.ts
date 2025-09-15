import './index.css';
import { sceneAdater } from './adapters/SceneAdapter';
import { Application } from './application/Application';

import CuttedFigures from './ui/widgets/CuttedFigures.vue';
import { createApp } from 'vue';

const app = createApp(CuttedFigures)
app.mount('#cuttedFigures')

new Application(sceneAdater);