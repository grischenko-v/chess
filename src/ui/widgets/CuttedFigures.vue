<template>
  <div class="wrapper">
    <li v-for="figure in cupturedFigures">
      {{ figure.figureType }}: {{ figure.figureColor }}
    </li>
  </div>
</template>

<style scoped>
.wrapper {
    position: absolute;
    background-color: lightgrey;
}
</style>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { eventBus, eventTypes } from '../../infra/EventBus'
import { Figure } from "../../domain/Figure";

export default defineComponent({
  setup () {
    const cupturedFigures = ref<Array<{figureType: string, figureColor: any}>>([])
    eventBus.subscribe(eventTypes.figureCaptured, (value: { detail: {capturedFigure: Figure}}) => {
      cupturedFigures.value.push({
        figureType: value.detail.capturedFigure.getType(),
        figureColor: value.detail.capturedFigure.getColor()
      });
    })
    return {cupturedFigures}
  }})
  
</script>