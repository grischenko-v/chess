import './index.css';
import { sceneAdater } from './adapters/SceneAdapter';
import { Application } from './application/Application';

new Application(sceneAdater);

const initWidgets = async () => {
    const { createApp } = await import('vue');
    await Promise.all(
        [
            initCuttedFiggures(createApp),
        ]
    )
}

const initCuttedFiggures = async (createApp: any) => {
    const { default: CuttedFigures } = await import('./ui/widgets/CuttedFigures/CuttedFigures.vue');
    const app = createApp(CuttedFigures);
    app.mount('#cuttedFigures');
}

initWidgets();