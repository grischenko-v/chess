import './index.css';

const initAppAsync = () => {
	return import('./chess/adapters/SceneAdapter')
		.then(({sceneAdater}) => 
			import('./chess/application/Application')
				.then(({ Application })=> new Application(sceneAdater))
				.catch(e => console.error(e))
		)
	.catch(e => console.error(e));
}

const initWidgetAsync = () => {
	return import('./widgets/initWigets')
				.then(({ initWidgets }) => initWidgets())
}

const initBotAsync = () => {
	return import ('./AIBot/AIBot')
	.then(({ AIBot }) => {
		const aibot = new AIBot()
		aibot.init();
	})
	.catch(e =>  console.error(e));
}

initWidgetAsync()
.then(() => initAppAsync())
.then(() => initBotAsync());
