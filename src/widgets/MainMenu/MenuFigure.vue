<template>
	<div :class="{
		'figure-wrapper': true, 
		'selected': selectedColor === color,
		disabled: !selectedMode || selectedMode === 'multi'
		}" @click="onFigureClick">
			<img :src="getCupturedFigureIcon()" class="figure-icon"/>
		</div>
</template>

<style lang="css" scoped>
.figure-icon {
	height: 72px;
	width: 72px;
}

.figure-wrapper {
	border: 1px solid #777;
	padding: 4px;
	border: 1px solid #777;

	&:hover {
		border-color: #333;
	}
}

.selected {
	border-color: #333;
	background-color: #444;
}

.disabled {
	opacity: 0.5;
	pointer-events: none;
}
</style>

<script setup lang="ts">
import type { FigureColor } from '@/chess/domain/Figure';
import { useMainMenuStore } from './MainMenuStore';
import { storeToRefs } from 'pinia';

type Props = {
  onFigureClick: () => void,
  color: FigureColor,
}

const props = defineProps<Props>();

const mainMenuStore = useMainMenuStore();
const {	selectedMode, selectedColor } = storeToRefs(mainMenuStore);

function getCupturedFigureIcon() {
  return `/chess//imgs/figures/King${props.color}.png`;
}

</script>