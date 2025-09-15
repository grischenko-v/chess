<template>
  <div class="wrapper">
    <li class="captured-list" v-for="figure in cupturedFigures">
      <div :style="{color: figure.figureColor}">
        {{ figure.figureType }}
      </div>
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
    padding: 4px;
    margin: 0;
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