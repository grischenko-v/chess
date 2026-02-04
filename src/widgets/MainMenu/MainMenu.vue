<template>
	<div class="main-menu-outbox" v-if="steps.isTransformMenuOpen">
		<div class="main-menu-inner">
			<h2 class="title">Choose figure to transform Pawn</h2>
			<ul class="transform-figures-list">
				<li v-for="figure in trasformedVariantes" :key="figure" >
					<MenuItem
						:figure-color="figureColor"
						:figure-type="figure"
						:figure-name="figureName">
					</MenuItem>
				</li>
			</ul>
		</div>
	</div>
</template>

<style scoped>
	.main-menu-outbox {
		position: absolute;
		top: 0px;
		left: 0px;
		right: 0px;
		bottom: 0px;
		background-color: rgba(255, 255, 255, 0.2);
		display: flex;
		align-items: center;
		justify-content: space-around;
		transition: all 300ms;
	}
	.main-menu-inner {
		padding: 20px;
		background: #ccc;
		border-radius: 4px;
		display: flex;
		flex-direction: column;
	}

	.title {
		text-align: center;
	}

	.transform-figures-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		justify-content: space-around;
	}
</style>

<script setup lang="ts">
import type { FigureColor, FigureType } from '@/chess/domain/Figure';
import MenuItem from './MenuItem.vue';
import { useStepsStore } from '../StepStore';
import { eventBus, eventTypes } from '@/infra/EventBus';
import { ref } from 'vue';

const steps = useStepsStore();

const figureColor = ref<FigureColor>('white');
const figureName = ref<string>('');

eventBus.subscribe(eventTypes.pawnTransformRequest, (data: unknown) => {
	const {detail} = data as {detail: {figureName: string, currentColor: FigureColor }};
	figureColor.value = detail.currentColor;
	figureName.value = detail.figureName;
	steps.toggleTransformMenu();
})

const trasformedVariantes: FigureType[] = ['Rook', 'Bishop', 'King', 'Queen'];
</script>
