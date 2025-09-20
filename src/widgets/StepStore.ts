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

function getShortFigureName(obj: FigureMoveEventDTO) {
	return figuresNameMap[obj.figureType as keyof typeof figuresNameMap];
}

function MoveItemObjtoStepString(obj: FigureMoveEventDTO): string {
	return `${getShortFigureName(obj)}${obj.currentCell}${obj.destinationCell}${obj.capture ? 'x' : ''}${obj.check ? '+' : ''}${obj.gameend ? '#' : ''}`;
}

export const useStepsStore = defineStore("stepsStore", () => {
	
const items = ref<FigureMoveEventDTO[]>([]);

const steps = computed(() => items.value.map(item => MoveItemObjtoStepString(item)));

function addItem(item: FigureMoveEventDTO) {
  items.value.push(item);
}

function revert() {
	if(!items.value.length) {
		return;
	}
	return items.value.pop();
}

return {items, steps, addItem, revert}
});