<template>
<div class="wrapper" ref="wrapperDiv">
	<div v-for="value, index in history">
		<span class="step">
			{{index + 1}}. {{value}}
		</span>
	</div>
	<div v-if="currentRoundString.length">
		<span class="step">
			{{history.length + 1}}. {{currentRoundString}}
		</span>
	</div>
</div>

</template>

<style lang="css" scoped>
.wrapper {
	background-color: lightgrey;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
	max-height: 120px;
	overflow: auto;
}

.step {
	padding: 2px;
}
</style>

<script lang="ts" setup>
import { eventBus, eventTypes } from '@/infra/EventBus';
import { computed, nextTick, ref } from 'vue';

type HistoryItem = {
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

const moveTypeAction = {
	move: (shortFigureType: string, detail: HistoryItem) => currentRound.value.push(`${shortFigureType}${detail.currentCell}-${detail.destinationCell} `),
	capture: (shortFigureType: string, detail: HistoryItem) => currentRound.value.push(`${shortFigureType}${detail.currentCell}-x${detail.destinationCell} `)
} as const;

const wrapperDiv = ref<HTMLDivElement | null>(null);
const history = ref<string[]>([]);
const currentRound = ref<string[]>([]);
const currentRoundString = computed(() => currentRound.value.join());

const scrollToBottom = () => {
  nextTick(() => {
	if(!wrapperDiv.value) {
		return;
	}
	wrapperDiv.value.scrollTop = wrapperDiv.value?.scrollHeight
  });
}

eventBus.subscribe(eventTypes.figureMove, (data: unknown) => {
  const { detail } = data as { detail: HistoryItem};
  console.log(detail);
  const shortFigureType = figuresNameMap[detail.figureType as keyof typeof figuresNameMap];
  const action = detail.moveType as keyof typeof moveTypeAction;
  moveTypeAction[action](shortFigureType, detail);

  if(detail.player === 'black') {
	history.value.push(currentRound.value.join(''))
	currentRound.value = [];
  }
  scrollToBottom();
})
</script>