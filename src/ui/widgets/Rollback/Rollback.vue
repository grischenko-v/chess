<template>
	<div class="rollback" @click="onRollBack"></div>
</template>

<style scoped>
.rollback {
	width: 32px;
	height: 32px;
	background-color: lightgrey;
	border-radius: 50%;
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