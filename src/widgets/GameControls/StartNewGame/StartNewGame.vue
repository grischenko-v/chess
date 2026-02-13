<template>
	<div class="newgame-wrapper">
		<button class="newgame" @click="startNewGame"></button>
	</div>
</template>

<style scoped>
.newgame-wrapper {
	width: 32px;
	height: 32px;
	padding: 4px;
	background-color: lightgrey;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.newgame {
	width: 24px;
	height: 24px;
	background-image: url('/imgs/icons/plus.png');
	background-repeat: no-repeat;
	background-size: contain;
	cursor: pointer;
	background-color: transparent;
    outline: none;
    border: none;
}
</style>

<script lang="ts" setup>
import { useStepsStore } from '../../StepStore';

const steps = useStepsStore();


function startNewGame () {
	while(steps.items.length > 0) {
		steps.revert();
	}
}
</script>