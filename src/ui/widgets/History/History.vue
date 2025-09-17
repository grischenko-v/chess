<template>
<div class="wrapper">
	<div v-for="value, index in history">
		<div v-if="index %2 === 0">
			<span class="step">
				{{index + 1}}. {{value.figureType}}{{value.currentCell}}-{{value.destinationCell}}
			</span>
			<span v-if="history[index + 1]">
				{{value.figureType}}{{ history[index + 1].currentCell }}-{{ history[index + 1].destinationCell }}
			</span>
		</div>
	</div>
</div>

</template>

<style lang="css" scoped>
.wrapper {
	background-color: lightgrey;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
	padding: 2px;
}

.step {
	padding-right: 2px;
}
</style>

<script lang="ts" setup>
import { eventBus, eventTypes } from '@/infra/EventBus';
import { ref } from 'vue';

type HistoryItem = {
	currentCell: string,
	destinationCell: string,
	figureType: string,
	player: string,
	moveType: string,
}

const history = ref<HistoryItem[]>([])


eventBus.subscribe(eventTypes.figureMove, (data: unknown) => {
  const { detail } = data as { detail: HistoryItem};
  console.log(detail);
  history.value.push({ ...detail, figureType: detail.figureType === 'Pawn' ? '' : detail.figureType[0]});
})
</script>