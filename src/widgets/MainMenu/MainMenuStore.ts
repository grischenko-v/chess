import { defineStore } from "pinia";
import { ref } from 'vue';

export const useMainMenuStore = defineStore("mainMenuStore", () => {
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

return {selectedMode, selectedColor, onSelectBlack, onSelectWhite, onSelectSingleMode, onSelectMultiMode}
})