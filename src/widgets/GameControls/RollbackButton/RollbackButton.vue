<template>
	<BaseButton v-if="steps.items.length > 0"  @click="onRollBack" img="rollback"></BaseButton>
</template>

<script lang="ts" setup>
import { useStepsStore } from '../../StepStore';
import BaseButton from "../BaseButton.vue";

const steps = useStepsStore();

function onRollBack() {
	steps.revert();
}
</script>