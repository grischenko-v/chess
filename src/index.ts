import './index.css';
import { sceneAdater } from './adapters/SceneAdapter';
import { Application } from './application/Application';
import type { CreateAppFunction } from 'vue';
import type { Pinia } from 'pinia';

new Application(sceneAdater);

const initWidget = async (pinia: Pinia, createApp: CreateAppFunction<Element>, widgetName: string, mountId: string) => {
	 import(`./ui/widgets/${widgetName}/${widgetName}.vue`).then(({ default: Widget }) => {
		const app = createApp(Widget);
		app.use(pinia)
		app.mount(mountId);
	 }).catch(e => console.error(e));
}

const widgets = [
	{
		name: 'History',
		mountId: '#history'
	},
	{
		name: 'CuttedFigures',
		mountId: '#cuttedFigures'
	},
	{
		name: 'Rollback',
		mountId: '#rollback'
	}
]

const initWidgets = async () => {
	try {
		const { createApp } = await import('vue');
		const { createPinia } = await import('pinia');
		const pinia = createPinia();
		widgets.forEach(widget => initWidget(pinia, createApp, widget.name, widget.mountId));
	} catch(e) {
		console.error(e);
	}
}

initWidgets();