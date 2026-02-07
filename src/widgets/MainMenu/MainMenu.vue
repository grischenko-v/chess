<template>
	<div class="main-menu-outer" v-if="isOpened">
		<div class="main-menu-inner">
			<h2>Select Game Mode</h2>
			<div :class="{'menu-item': true, 'selected': selectedMode === 'single'}" @click="onSelectSingleMode">Single</div>
			<div :class="{'menu-item': true, 'selected': selectedMode === 'multi'}" @click="onSelectMultiMode">Multi</div>
			<div class="figures-wrapper">
				<div :class="{
					'figure-wrapper': true, 
					'selected': selectedColor === 'white',
					disabled: !selectedMode || selectedMode === 'multi'
				}" @click="onSelectWhite">
					<img :src="getCupturedFigureIcon('King', 'white')" class="figure-icon"/>
				</div>
				<div :class="{
					'figure-wrapper': true,
					'selected': selectedColor === 'black',
					disabled: !selectedMode ||selectedMode === 'multi'
				}" @click="onSelectBlack">
					<img :src="getCupturedFigureIcon('King', 'black')" class="figure-icon"/>
				</div>
			</div>
			<div :class="{'menu-item': true, 'disabled': !selectedMode || selectedMode === 'single' && !selectedColor}" @click="onGameStart">Play</div>
		</div>
	</div>
</template>

<style scoped>
.main-menu-outer{
	position: absolute;
	inset: 0px;
	background-color: rgba(255, 255, 255, 0.2);
	display: flex;
	align-items: center;
	justify-content: space-around;
	transition: all 300ms;
}
.main-menu-inner {
	padding: 20px;
	background: #ccc;
	border-radius: 4px;
	display: flex;
	flex-direction: column;
}

.menu-item {
	padding: 4px;
	border: 1px solid #777;
	border-radius: 4px;
	margin-bottom: 4px;
	text-align: center;
	transition: all 300ms;
	cursor: pointer;

	&:hover {
		border-color: #333;
	}
}

.figures-wrapper {
	display: flex;
	justify-content: space-between;
	margin-bottom: 8px;
}

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

<script lang="ts" setup>
import type { FigureColor, FigureType } from '@/chess/domain/Figure';
import { eventBus, eventTypes } from '@/infra/EventBus';
import { ref } from 'vue';

const isOpened = ref(true);
const selectedMode = ref();
const selectedColor = ref();

function onSelectBlack() {
	if(selectedMode.value === 'multi') {
		return;
	}
	selectedColor.value = 'black'
}

function onSelectWhite() {
	if(selectedMode.value === 'multi') {
		return;
	}
	selectedColor.value = 'white'
}

function onSelectSingleMode() {
	selectedMode.value = 'single';
}

function onSelectMultiMode() {
	selectedMode.value = 'multi';
	selectedColor.value = undefined;
}

function onGameStart() {
	eventBus.dispatchEvent(eventTypes.gameModeSelect, {
		selectedMode: selectedMode.value,
		AIBotPlayerColor: selectedColor.value === 'white' ? 'black' : 'white' });
	isOpened.value = false;
}

function getCupturedFigureIcon(figureType: FigureType, figureColor: FigureColor) {
  return `/chess/dist/imgs/figures/${figureType}${figureColor}.png`;
}

</script>