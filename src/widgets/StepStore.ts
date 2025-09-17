import { defineStore } from "pinia";
import { computed, ref } from "vue";

export type StepItem = {
	currentCell: string,
	destinationCell: string,
	figureType: string,
	player: string,
	moveType: 'move' | 'capture',
}

const figuresNameMap = {
	'Pawn': '',
	'Bishop': 'B',
	'Rook': 'R',
	'Knight': 'N',
	'Queen': 'Q',
	'King': 'K'
} as const;

export const useStepsStore = defineStore("steps", () => {
const items = ref<string[]>([]);
const currentStep = ref<string[]>([]);
const currentStepString = computed(() => currentStep.value.join());

const moveTypeAction = {
	move: (shortFigureType: string, detail: StepItem) => currentStep.value.push(`${shortFigureType}${detail.currentCell}-${detail.destinationCell} `),
	capture: (shortFigureType: string, detail: StepItem) => currentStep.value.push(`${shortFigureType}${detail.currentCell}-x${detail.destinationCell} `)
} as const;

function addItem(item: StepItem) {
  const shortFigureType = figuresNameMap[item.figureType as keyof typeof figuresNameMap];
  const action = item.moveType as keyof typeof moveTypeAction;
  moveTypeAction[action](shortFigureType, item);

  if(item.player === 'black') {
	items.value.push(currentStep.value.join(''))
	currentStep.value = [];
  }
}

function revert() {
	if(!items.value.length) {
		return;
	}
	return items.value.pop();
}

return {items, addItem, currentStepString, revert}
});