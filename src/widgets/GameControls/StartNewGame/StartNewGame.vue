<template>
	<BaseButton v-if="steps.items.length > 0"  @click="startNewGame" img="plus"></BaseButton>
</template>

<script lang="ts" setup>
import indexedDbWrapper from '@/infra/IndexedDb';
import { useStepsStore } from '../../StepStore';
import BaseButton from "../BaseButton.vue";

const steps = useStepsStore();

async function startNewGame () {
	await indexedDbWrapper.clearGameData();
	steps.openMainMenu();
}
</script>