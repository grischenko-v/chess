<template>
	<BaseButton v-if="chessStore.items.length > 0"  @click="onRollBack" img="rollback"></BaseButton>
</template>

<script lang="ts" setup>
import { useChessStore } from '../../ChessStore';
import BaseButton from "../BaseButton.vue";

const chessStore = useChessStore();

function onRollBack() {
	chessStore.revert();
}
</script>