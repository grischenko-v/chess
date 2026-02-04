import type { Pinia } from 'pinia';
import type { CreateAppFunction } from 'vue';

const initWidget = async (pinia: Pinia, createApp: CreateAppFunction<Element>, widgetName: string, mountId: string) => {
	 import(`./${widgetName}/${widgetName}.vue`).then(({ default: Widget }) => {
		const app = createApp(Widget);
		app.use(pinia)
		app.mount(mountId);
	 })
	 .catch(e => console.error(e));
}

const widgets = [
	{
		name: 'HistoryViewer',
		mountId: '#history'
	},
	{
		name: 'CuttedFigures',
		mountId: '#cuttedFigures'
	},
	{
		name: 'GameControls',
		mountId: '#gameControls'
	},
	{
		name: 'PawnTransformMenu',
		mountId: '#pawnTransformMenu'
	}
]

export const initWidgets = async () => {
	try {
		const { createApp } = await import('vue');
		const { createPinia } = await import('pinia');
		const pinia = createPinia();
		widgets.forEach(widget => initWidget(pinia, createApp, widget.name, widget.mountId));
	}
	catch(e) {
		console.error(e);
	}
}