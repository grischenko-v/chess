<template>
<div class="wrapper">
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
}

.step {
	padding: 2px;
}
</style>

<script lang="ts" setup>
import { eventBus, eventTypes } from '@/infra/EventBus';
import { computed, ref } from 'vue';

type HistoryItem = {
	currentCell: string,
	destinationCell: string,
	figureType: string,
	player: string,
	moveType: string,
}

const figuresNameMap = {
	'Pawn': '',
	'Bishop': 'B',
	'Rook': 'R',
	'Knight': 'N',
	'Queen': 'Q',
	'King': 'K'
} as const;

const history = ref<string[]>([]);
const currentRound = ref<string[]>([]);
const currentRoundString = computed(() => currentRound.value.join());

eventBus.subscribe(eventTypes.figureMove, (data: unknown) => {
  const { detail } = data as { detail: HistoryItem};
  console.log(detail);
  const shortFigureType = figuresNameMap[detail.figureType as keyof typeof figuresNameMap];
  if(detail.moveType === 'move'){
  	currentRound.value.push(`${shortFigureType}${detail.currentCell}-${detail.destinationCell} `)
  }
  if(detail.moveType === 'capture'){
  	currentRound.value.push(`${shortFigureType}${detail.currentCell}-x${detail.destinationCell} `)
  }
  if(detail.player === 'black') {
	history.value.push(currentRound.value.join(''))
	currentRound.value = [];
  }
})
</script>