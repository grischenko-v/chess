<template>
	<div class="main-menu-outbox">
		<ul class="main-menu-inner">
			<li v-for="figure in trasformedVariantes" :key="figure" >
				<MenuItem figure-color="black" :figure-type="figure"></MenuItem>
			</li>
		</ul>
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
		/* display: none; */
	}
	.main-menu-inner {
		padding: 20px;
		background: #ccc;
		border-radius: 4px;
		display: flex;
		flex-direction: column;
	}
</style>

<script setup lang="ts">
import type { FigureType } from '@/chess/domain/Figure';
import MenuItem from './MenuItem.vue';

const trasformedVariantes: FigureType[] = ['Rook'];
</script>
