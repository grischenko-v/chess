<template>
	<div class="main-menu-outer" v-if="isOpened">
		<div class="main-menu-inner">
			<h2>Select Game Mode</h2>
			<div class="menu-item" @click="onSelectSingleMode">Single</div>
			<div class="menu-item" @click="onSelectMultiMode">Multi</div>
		</div>
	</div>
</template>

<style scoped>
.main-menu-outer{
	position: absolute;
	inset: 0px;
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

.menu-item {
	padding: 4px;
	border: 1px solid #777;
	border-radius: 4px;
	margin-bottom: 4px;
	text-align: center;
	transition: all 300ms;
	cursor: pointer;

	&:hover {
		border-color: #333;
	}
}
</style>

<script lang="ts" setup>
import { eventBus, eventTypes } from '@/infra/EventBus';
import { ref } from 'vue';

const isOpened = ref(true);

function onSelectSingleMode() {
	eventBus.dispatchEvent(eventTypes.gameModeSelect, {selectedMode: 'single' });
	isOpened.value = false;
}

function onSelectMultiMode() {
	eventBus.dispatchEvent(eventTypes.gameModeSelect, {selectedMode: 'multi' });
	isOpened.value = false;
}

</script>