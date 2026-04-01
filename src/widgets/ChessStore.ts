import { eventBus, eventTypes } from "@/infra/EventBus";
import type { FigureMoveEventDTO } from "@/infra/FigureMoveEvent";
import indexedDbWrapper from "@/infra/IndexedDb";
import type { Subscription } from "dexie";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

const figuresNameMap = {
	'Pawn': '',
	'Bishop': 'B',
	'Rook': 'R',
	'Knight': 'N',
	'Queen': 'Q',
	'King': 'K'
} as const;

function isShotRouque(obj: FigureMoveEventDTO) {
	if(obj.currentCell === 'e1' && obj.destinationCell == 'g1'
		|| obj.currentCell === 'e8' && obj.destinationCell === 'g8'
	) {
		return true;
	}
}

function getShortFigureName(obj: FigureMoveEventDTO) {
	return figuresNameMap[obj.figureType as keyof typeof figuresNameMap];
}

function getTransformFigureShortName(obj: FigureMoveEventDTO) {
	if(!obj.transform) {
		return '';
	}
	return figuresNameMap[obj.transform as keyof typeof figuresNameMap].toLowerCase();
}

function MoveItemObjtoStepString(obj: FigureMoveEventDTO): string {
	if(obj.rouqe) {
		return isShotRouque(obj) ? '0-0' : '0-0-0';
	}
	return `${getShortFigureName(obj)}${obj.currentCell}${obj.transform ? `${getTransformFigureShortName(obj)}` : ''}${obj.destinationCell}${obj.capture ? 'x' : ''}${obj.check ? '+' : ''}${obj.gameend ? '#' : ''}`;
}

export const useChessStore = defineStore("chessStore", () => {

	let sub: Subscription | undefined;
	const items = ref<FigureMoveEventDTO[]>([]);
	const steps = computed(() => items.value.map(item => MoveItemObjtoStepString(item)));

	async function start() {
		if (sub) {
			return;
		}
		const events = await indexedDbWrapper.getEvents();
		items.value = events;
	}

	function stop() {
		sub?.unsubscribe();
		sub = undefined;
	}

const isBotInited = ref<boolean>(false);
const isTransformMenuOpen = ref<boolean>(false);
const isMainMenuOpened = ref(true);

function openMainMenu() {
	isMainMenuOpened.value = true;
}

function closeMainMenu() {
	isMainMenuOpened.value = false;
}

const toggleTransformMenu = () => {
	isTransformMenuOpen.value = !isTransformMenuOpen.value ;
}

eventBus.subscribe(eventTypes.figureMove, (data: unknown) => {
  const { detail } = data as { detail: { value: FigureMoveEventDTO }};
  addItem(detail.value);
})

eventBus.subscribe(eventTypes.botInited, () => {
	isBotInited.value = true;
})

function addItem(item: FigureMoveEventDTO) {
  items.value.push(item);
}

async function  revert() {
	revertFigureMove(false);
	
	const gamedata = await indexedDbWrapper.getGame();

	if(gamedata[0].mode === 'single') {
		revertFigureMove(false);
	}
}

function revertFigureMove(reveterdAll: boolean) {
	if(!items.value.length) {
		return;
	}

	const figureMoveForRevert = items.value.pop();
	eventBus.dispatchEvent(eventTypes.revertFigureMove, {figuremove: figureMoveForRevert, reveterdAll: reveterdAll});
}

return {
	items,
	steps,
	addItem,
	revert,
	revertFigureMove,
	isBotInited,
	toggleTransformMenu,
	isTransformMenuOpen,
	start,
	stop,
	isMainMenuOpened,
	openMainMenu,
	closeMainMenu
}
});