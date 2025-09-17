import './index.css';
import { sceneAdater } from './adapters/SceneAdapter';
import { Application } from './application/Application';

new Application(sceneAdater);

const initWidgets = async () => {
    const { createApp } = await import('vue');
    await Promise.all(
        [
            initWidget(createApp, 'History', '#history'),
			initWidget(createApp, 'CuttedFigures', '#cuttedFigures'),
        ]
    )
}

const initWidget = async (createApp: any, widgetName: string, mountId: string) => {
	console.log('init widget',`./ui/widgets/${widgetName}.vue`);
	const { default: Widget } = await import(`./ui/widgets/${widgetName}/${widgetName}.vue`);
	const app = createApp(Widget);
	app.mount(mountId);
}

initWidgets();