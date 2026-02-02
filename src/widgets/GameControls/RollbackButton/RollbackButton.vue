<template>
	<div class="rollback-wrapper" v-if="steps.items.length > 0">
		<button class="rollback" @click="onRollBack"></button>
	</div>
</template>

<style scoped>
.rollback-wrapper {
	width: 32px;
	height: 32px;
	padding: 4px;
	background-color: lightgrey;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.rollback {
	width: 24px;
	height: 24px;
	background-image: url('/imgs/icons/rollback.png');
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

function onRollBack() {
	steps.revert();
}
</script>