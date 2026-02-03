<template>
	<div class="main-menu-outbox">
		<div class="main-menu-inner">
			<MenuItem></MenuItem>
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
		display: none;
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
import MenuItem from './MenuItem.vue';

</script>
