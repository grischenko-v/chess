<template>
<div class="wrapper">
	<div v-for="value, index in history">
		<div v-if="index %2 === 0">
			<span>
				{{index + 1}}. {{value.currentCell}} {{value.destinationCell}}
			</span>
			<span v-if="history[index + 1]">
				{{ history[index + 1].currentCell }} {{ history[index + 1].destinationCell }}
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
}

const history = ref<HistoryItem[]>([])


eventBus.subscribe(eventTypes.figureMove, (data: unknown) => {
  const { detail } = data as { detail: HistoryItem};
  history.value.push(detail);
})
</script>