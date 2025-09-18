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
import { computed, ref } from 'vue'
import FigureList from './FigureList.vue';
import { eventBus, eventTypes } from '@/infra/EventBus';
import { Figure, type FigureColor, type FigureType  } from '@/chess/domain/Figure';

const cupturedFigures = ref<Array<{figureType: FigureType, figureColor: FigureColor}>>([]);
const cupturedWhite = computed(() => cupturedFigures.value.filter(figure => figure.figureColor === 'white'));
const cupturedBlack = computed(() => cupturedFigures.value.filter(figure => figure.figureColor === 'black'));

eventBus.subscribe(eventTypes.figureCaptured, (data: unknown) => {
  const { detail } = data as { detail: {capturedFigure: Figure}};
  cupturedFigures.value.push({
    figureType: detail.capturedFigure.getType(),
    figureColor: detail.capturedFigure.getColor()
  });
})
</script>