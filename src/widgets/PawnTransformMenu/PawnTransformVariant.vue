<template>
	<div class="pawn-transform-variant" @click="onFigureSelect">
      <img :src="getCupturedFigureIcon(figureType, figureColor)" class="figure-icon"/>
	  <span>{{figureType}}</span>
	</div>
</template>

<style scoped>
.pawn-transform-variant {
	border: 1px solid #777;
	border-radius: 4px;
	padding: 8px;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
	opacity: 0.7;
	transition: all 300ms;

	&:hover {
		border-color: #333;
		opacity: 1;
	}
}

.figure-icon {
	height: 32px;
	width: 32px;
}
</style>

<script lang="ts" setup>
import type { FigureColor, FigureType } from '@/chess/domain/Figure';
import { useStepsStore } from '../StepStore';
import { eventBus, eventTypes } from '@/infra/EventBus';

const steps = useStepsStore();

type Props = {
  figureType: FigureType,
  figureColor: FigureColor,
  figureName: string,
}

const props = defineProps<Props>()

function onFigureSelect() {
	eventBus.dispatchEvent(eventTypes.pawnTransformResponse, {figureType: props.figureType, figureName: props.figureName});
	steps.toggleTransformMenu();
}

function getCupturedFigureIcon(figureType: FigureType, figureColor: FigureColor) {
  return `/chess/dist/imgs/figures/${figureType}${figureColor}.png`;
}
</script>
