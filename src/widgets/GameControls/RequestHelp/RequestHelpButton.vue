<template>
	<BaseButton v-if="chessStore.isBotInited"  @click="onHelpRequest" img="help"></BaseButton>
</template>

<script lang="ts" setup>
import { eventBus, eventTypes } from "@/infra/EventBus";
import { useChessStore } from '../../ChessStore';
import { onMounted, onUnmounted } from "vue";
import BaseButton from "../BaseButton.vue";

const chessStore = useChessStore();

onMounted(() => chessStore.start());
onUnmounted(() => chessStore.stop());

function onHelpRequest() {
	eventBus.dispatchEvent(eventTypes.helpRequest, {})
}
</script>