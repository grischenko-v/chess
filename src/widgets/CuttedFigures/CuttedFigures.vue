<template>
  <div class="wrapper">
    <FigureList :cupturedFigures="cupturedWhite"/>
    <FigureList :cupturedFigures="cupturedBlack"/>
  </div>
</template>

<style scoped>
.wrapper {
    background-color: lightgrey;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
}
</style>

<script lang="ts" setup>
import { computed } from 'vue'
import FigureList from './FigureList.vue';
import { useChessStore } from '../ChessStore';

const chessStore = useChessStore();

const cupturedFigures = computed(() => chessStore.items.filter(item => item.capture))

const cupturedWhite = computed(() => cupturedFigures.value.filter(figure => figure.figureColor === 'white'));
const cupturedBlack = computed(() => cupturedFigures.value.filter(figure => figure.figureColor === 'black'));
</script>