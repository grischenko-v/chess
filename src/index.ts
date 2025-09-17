import './index.css';
import { sceneAdater } from './adapters/SceneAdapter';
import { Application } from './application/Application';
import { createPinia } from 'pinia';

new Application(sceneAdater);

const pinia = createPinia()

const initWidgets = async () => {
    const { createApp } = await import('vue');
    await Promise.all(
        [
            initWidget(createApp, 'History', '#history'),
			initWidget(createApp, 'CuttedFigures', '#cuttedFigures'),
			initWidget(createApp, 'Rollback', '#rollback'),
        ]
    )
}

const initWidget = async (createApp: any, widgetName: string, mountId: string) => {
	const { default: Widget } = await import(`./ui/widgets/${widgetName}/${widgetName}.vue`);
	const app = createApp(Widget);
	app.use(pinia)
	app.mount(mountId);
}

initWidgets();