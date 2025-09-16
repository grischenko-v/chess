import './index.css';
import { sceneAdater } from './adapters/SceneAdapter';
import { Application } from './application/Application';

import CuttedFigures from './ui/widgets/CuttedFigures.vue';
import { createApp } from 'vue';

const app = createApp(CuttedFigures)
app.mount('#cuttedFigures')

new Application(sceneAdater);

// const initWidgets = async () => {
//     const { createApp } = await import('vue');
//     await Promise.all(
//         [
//             initCuttedFiggures(createApp),
//         ]
//     )
// }

// const initCuttedFiggures = async (createApp: any) => {
//     const CuttedFigures = await import('./ui/widgets/CuttedFigures.vue');
//      const app = createApp(CuttedFigures);
//     app.mount('#cuttedFigures');
// }

// initWidgets();