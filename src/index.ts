import './index.css';

const initAppAsync = async () => {
	return import('./chess/adapters/SceneAdapter')
		.then(({sceneAdater}) => 
			import('./chess/application/Application')
				.then(({ Application })=> {
					const app =  new Application(sceneAdater);
					app.initStateFromIndexedDb();
				})
				.catch(e => console.error(e))
		)
	.catch(e => console.error(e));
}

const initWidgetAsync = async () => {
	return import('./widgets/initWigets')
				.then(({ initWidgets }) => initWidgets())
}

const initBotAsync = async () => {
	return import ('./AIBot/AIBot')
	.then(({ AIBot }) => {
		const aibot = new AIBot()
		aibot.init();
	})
	.catch(e =>  console.error(e));
}

initWidgetAsync()
.then(() => {
	initAppAsync()
})
.then(() => initBotAsync());
