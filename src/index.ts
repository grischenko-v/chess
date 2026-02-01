import { AIBot } from './AIBot/AIBot';
import './index.css';

import('./chess/adapters/SceneAdapter')
.then(({sceneAdater}) => 
	import('./chess/application/Application')
	.then(({ Application })=> new Application(sceneAdater))
	.catch(e => console.error(e))
)
.catch(e => console.error(e));

import('./widgets/initWigets')
.then(({ initWidgets }) => initWidgets())
.catch(e => console.error(e));


// AIBot init
const aibot = new AIBot()

aibot.addListeners((e: string) => {
	console.log('AIBot message:', e);
});

aibot.message('uci');
