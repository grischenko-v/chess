<template>
<ul class="history-list" ref="wrapperDiv" v-if="stepsData.length > 0">
	<li v-for="value, index in stepsData" :key="index + value" class="history-list-item">
		<HistoryStep :step="combineStepData(index, value)"/>
	</li>
</ul>
</template>

<style lang="css" scoped>
.history-list {
	background-color: lightgrey;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
	max-height: 120px;
	width: 156px;
	overflow: auto;
	min-height: 24px;
	list-style: none;
    margin: 0;
    padding: 8px;
}

.history-list-item {
	padding: 4px;
}
</style>

<script lang="ts" setup>
import { computed, nextTick, ref, watch } from 'vue';
import { useStepsStore } from '../StepStore';
import HistoryStep from './HistoryStep.vue';

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

watch(stepStore.items, () => scrollToBottom()); 
</script>