<template>
	<div class="wrapper">
		<div class="rollback" @click="onRollBack"></div>
	</div>
</template>

<style scoped>
.wrapper {
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
}
</style>

<script lang="ts" setup>
import { useStepsStore } from '../StepStore';

const steps = useStepsStore();

function onRollBack() {
	const revertedStep = steps.revert();
	console.log(revertedStep);
}
</script>