<template>
<div class="wrapper" ref="wrapperDiv">
	<div v-for="value, index in steps.items">
		<HistoryStep :step="combineStepData(index, value)"/>
	</div>
	<div v-if="steps.currentStepString.length">
		<HistoryStep :step="combineStepData(steps.items.length - 1, steps.currentStepString)"/>
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
</style>

<script lang="ts" setup>
import { eventBus, eventTypes } from '@/infra/EventBus';
import { nextTick, ref } from 'vue';
import { useStepsStore, type StepItem } from '../StepStore';
import HistoryStep from './HistoryStep.vue';

const wrapperDiv = ref<HTMLDivElement | null>(null);
const steps = useStepsStore();

function combineStepData(index: number, step: string) {
	return `${index + 1}. ${step}`
}

const scrollToBottom = () => {
  nextTick(() => {
	if(!wrapperDiv.value) {
		return;
	}
	wrapperDiv.value.scrollTop = wrapperDiv.value?.scrollHeight
  });
}

eventBus.subscribe(eventTypes.figureMove, (data: unknown) => {
  const { detail } = data as { detail: StepItem};
  steps.addItem(detail)
  scrollToBottom();
})
</script>