import { defineStore } from "pinia";
import { ref } from 'vue';

export const useMainMenuStore = defineStore("mainMenuStore", () => {
const selectedMode = ref();
const selectedColor = ref();
const botColor = ref<'white' | 'black' | undefined>();

function onSelectBlack() {
	if(selectedMode.value === 'multi') {
		return;
	}
	selectedColor.value = 'black'
	botColor.value = 'white';
}

function onSelectWhite() {
	if(selectedMode.value === 'multi') {
		return;
	}
	selectedColor.value = 'white'
	botColor.value = 'black';
}

function onSelectSingleMode() {
	selectedMode.value = 'single';
}

function onSelectMultiMode() {
	selectedMode.value = 'multi';
	selectedColor.value = undefined;
}

function reset() {
	selectedMode.value = undefined;
	selectedColor.value = undefined;
}

return {selectedMode, selectedColor, botColor, onSelectBlack, onSelectWhite, onSelectSingleMode, onSelectMultiMode, reset}
})