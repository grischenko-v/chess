<template>
	<div class="main-menu-outer" v-if="isMainMenuOpened" @click="stepStore.closeMainMenu">
		<div class="main-menu-inner" @click.stop>
			<h2>Select Game Mode</h2>
			<div :class="{'menu-item': true, 'selected': selectedMode === 'single'}" @click="mainMenuStore.onSelectSingleMode">Single</div>
			<div :class="{'menu-item': true, 'selected': selectedMode === 'multi'}" @click="mainMenuStore.onSelectMultiMode">Multi</div>
			<div class="figures-wrapper">
				<MenuFigure
					color='white'
					:onFigureClick="mainMenuStore.onSelectWhite"
				></MenuFigure>
				<MenuFigure
					color='black'
					:onFigureClick="mainMenuStore.onSelectBlack"
				></MenuFigure>
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
import { eventBus, eventTypes } from '@/infra/EventBus';
import { onMounted, watch } from 'vue';
import { useMainMenuStore } from './MainMenuStore';
import MenuFigure from './MenuFigure.vue';
import { storeToRefs } from 'pinia';
import indexedDbWrapper from '@/infra/IndexedDb';
import { useStepsStore } from '../StepStore';

const mainMenuStore = useMainMenuStore()
const stepStore = useStepsStore();
const {
	selectedMode,
	selectedColor,
	botColor} = storeToRefs(mainMenuStore);
const { isMainMenuOpened } = storeToRefs(stepStore);

onMounted(() => {
	(async () => {
		const gamedata = await indexedDbWrapper.getGame();
		if(!gamedata.length) {
			return;
		}

		stepStore.closeMainMenu();
	})()
});

watch(isMainMenuOpened, () => {
  if(isMainMenuOpened) {
		mainMenuStore.reset();
  }
})

function onGameStart() {
	while(stepStore.steps.length > 0) {
		stepStore.revert();
	}
	eventBus.dispatchEvent(eventTypes.gameModeSelect, {
		selectedMode: selectedMode.value,
		AIBotPlayerColor: botColor.value });
	indexedDbWrapper.initGame(selectedMode.value, botColor.value);
	stepStore.closeMainMenu();
}

</script>