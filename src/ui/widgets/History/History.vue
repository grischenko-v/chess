<template>
<div class="wrapper" ref="wrapperDiv">
	<div v-for="value, index in steps.items">
		<span class="step">
			{{index + 1}}. {{value}}
		</span>
	</div>
	<div v-if="steps.currentStepString.length">
		<span class="step">
			{{steps.items.length + 1}}. {{steps.currentStepString}}
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
import { nextTick, ref } from 'vue';
import { useStepsStore, type StepItem } from '../StepStore';

const wrapperDiv = ref<HTMLDivElement | null>(null);
const steps = useStepsStore();

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
  console.log(detail);
  steps.addItem(detail)
  scrollToBottom();
})
</script>