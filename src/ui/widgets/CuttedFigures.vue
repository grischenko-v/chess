<template>
  <div class="wrapper">
    <li class="captured-list" v-for="figure in cupturedFigures">
      <img 
      class="captured-figure" :src="getCupturedFigureIcon(figure)"/>
    </li>
  </div>
</template>

<style scoped>
.wrapper {
    position: absolute;
    background-color: lightgrey;
}
.captured-list {
    list-style: none;
    padding: 2px;
    margin: 0;
}
.captured-figure {
  width: 20px;
  height: 20px;
}
</style>

<script lang="ts" setup>
import { ref } from 'vue'
import { eventBus, eventTypes } from '../../infra/EventBus'
import { Figure, type FigureColor  } from "../../domain/Figure";

function getCupturedFigureIcon(figure: {figureType: string, figureColor: FigureColor}) {
  return `/imgs/${figure.figureType}${figure.figureColor}.png`;
}

const cupturedFigures = ref<Array<{figureType: string, figureColor: FigureColor}>>([])

eventBus.subscribe(eventTypes.figureCaptured, (data: unknown) => {
  const { detail } = data as { detail: {capturedFigure: Figure}};
  cupturedFigures.value.push({
    figureType: detail.capturedFigure.getType(),
    figureColor: detail.capturedFigure.getColor()
  });
})
</script>