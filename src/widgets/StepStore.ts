import { eventBus, eventTypes } from "@/infra/EventBus";
import type { FigureMoveEventDTO } from "@/infra/FigureMoveEvent";
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
	return `${getShortFigureName(obj)}${obj.currentCell}${obj.destinationCell}${obj.capture ? 'x' : ''}${obj.check ? '+' : ''}${obj.gameend ? '#' : ''}${obj.transform ? `${getTransformFigureShortName(obj)}` : ''}`;
}

export const useStepsStore = defineStore("stepsStore", () => {
	
const items = ref<FigureMoveEventDTO[]>([]);

const steps = computed(() => items.value.map(item => MoveItemObjtoStepString(item)));

const isBotInited = ref<boolean>(false);

const isTransformMenuOpen = ref<boolean>(false);

const toggleTransformMenu = () => {
	isTransformMenuOpen.value = !isTransformMenuOpen.value ;
}

eventBus.subscribe(eventTypes.figureMove, (data: unknown) => {
  const { detail } = data as { detail: { value: FigureMoveEventDTO }};
  console.log(detail.value);
  addItem(detail.value);
})

eventBus.subscribe(eventTypes.botInited, () => {
	isBotInited.value = true;
})

function addItem(item: FigureMoveEventDTO) {
  items.value.push(item);
}

function revert() {
	if(!items.value.length) {
		return;
	}
	const revertFigureMove = items.value.pop();
	eventBus.dispatchEvent(eventTypes.revertFigureMove, revertFigureMove);
}

return {items, steps, addItem, revert, isBotInited, toggleTransformMenu, isTransformMenuOpen}
});