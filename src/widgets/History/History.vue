<template>
<div class="wrapper" ref="wrapperDiv">
	<div v-for="value, index in stepsData">
		<HistoryStep :step="combineStepData(index, value)"/>
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
	width: 156px;
	overflow: auto;
}
</style>

<script lang="ts" setup>
import { eventBus, eventTypes } from '@/infra/EventBus';
import { computed, nextTick, ref } from 'vue';
import { useStepsStore } from '../StepStore';
import HistoryStep from './HistoryStep.vue';
import type { FigureMoveEventDTO } from '@/infra/FigureMoveEvent';

const wrapperDiv = ref<HTMLDivElement | null>(null);
const stepStore = useStepsStore();

const stepsData = computed(() => stepStore.steps
	.filter((_, index) => index % 2 === 0)
    .map((step, index) => {
      const originalIndex = index * 2;
      const nextStep = stepStore.steps[originalIndex + 1];
      return nextStep ? `${step} ${nextStep}` : step;
    })
);

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
  const { detail } = data as { detail: { value: FigureMoveEventDTO }};
  stepStore.addItem(detail.value);
  scrollToBottom();
})

</script>