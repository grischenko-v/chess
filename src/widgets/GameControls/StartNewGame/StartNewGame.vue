<template>
	<BaseButton v-if="chessStore.items.length > 0"  @click="startNewGame" img="plus"></BaseButton>
</template>

<script lang="ts" setup>
import indexedDbWrapper from '@/infra/IndexedDb';
import { useChessStore } from '../../ChessStore';
import BaseButton from "../BaseButton.vue";

const chessStore = useChessStore();

async function startNewGame () {
	await indexedDbWrapper.clearGameData();
	chessStore.openMainMenu();
}
</script>