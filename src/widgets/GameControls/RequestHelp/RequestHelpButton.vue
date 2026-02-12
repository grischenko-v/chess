<template>
	<div class="help-wrapper" v-if="steps.isBotInited">
		<button class="help" @click="onHelpRequest"></button>
	</div>
</template>

<style scoped>
.help-wrapper {
	width: 32px;
	height: 32px;
	padding: 4px;
	background-color: lightgrey;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.help {
	width: 24px;
	height: 24px;
	background-image: url('/imgs/icons/help.png');
	background-repeat: no-repeat;
	background-size: contain;
	cursor: pointer;
	background-color: transparent;
    outline: none;
    border: none;
}
</style>

<script lang="ts" setup>
import { eventBus, eventTypes } from "@/infra/EventBus";
import { useStepsStore } from '../../StepStore';
import { onMounted, onUnmounted } from "vue";

const steps = useStepsStore();

onMounted(() => steps.start());
onUnmounted(() => steps.stop());

function onHelpRequest() {
	eventBus.dispatchEvent(eventTypes.helpRequest, {})
}
</script>