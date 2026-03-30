<template>
	<BaseButton v-if="chessStore.items.length > 0"  @click="startNewGame" img="plus"></BaseButton>
</template>

<script lang="ts" setup>
import { useChessStore } from '../../ChessStore';
import BaseButton from "../BaseButton.vue";

const chessStore = useChessStore();

function startNewGame () {
	chessStore.openMainMenu();
}
</script>