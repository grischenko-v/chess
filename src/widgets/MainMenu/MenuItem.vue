<template>
	<div class="menu-item">
      <img :src="getCupturedFigureIcon(figureType, figureColor)"/>
	</div>
</template>

<style scoped>
.menu-item {
	border: 1px solid #777;
	border-radius: 4px;
	padding: 8px;
	min-width: 120px;
	text-align: center;
}
</style>

<script lang="ts" setup>
import type { FigureColor, FigureType } from '@/chess/domain/Figure';

type Props = {
  figureType: FigureType,
  figureColor: FigureColor
}

defineProps<Props>()

function getCupturedFigureIcon(figureType: FigureType, figureColor: FigureColor) {
  return `/chess/dist/imgs/figures/${figureType}${figureColor}.png`;
}
</script>
