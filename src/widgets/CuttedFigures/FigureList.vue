<template>
  <ul class="cuptured-list">
    <li class="cuptured-list-item" v-for="figure in cupturedFigures" :key="figure.figureType + figure.figureColor">
      <img 
      class="cuptured-figure" :src="getCupturedFigureIcon(figure)"/>
    </li>
  </ul>
</template>

<style scoped>
.cuptured-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
}

.cuptured-list-item {
  list-style: none;
  padding: 2px;
  margin: 0;
}
.cuptured-figure {
  width: 20px;
  height: 20px;
}
</style>

<script lang="ts" setup>
import { type FigureColor, type FigureType  } from "@/chess/domain/Figure";

type Props = {
  cupturedFigures: {figureType: FigureType, figureColor: FigureColor}[],
}

defineProps<Props>()

function getCupturedFigureIcon(figure: {figureType: FigureType, figureColor: FigureColor}) {
  return `/chess//imgs/figures/${figure.figureType}${figure.figureColor}.png`;
}
</script>