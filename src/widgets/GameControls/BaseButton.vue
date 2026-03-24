<template>
	<div class="button-wrapper">
		<button class="button" :style="{backgroundImage: `url(/chess//imgs/icons/${img}.png)`}"></button>
	</div>
</template>

<style scoped>
.button-wrapper {
	width: 32px;
	height: 32px;
	padding: 4px;
	background-color: lightgrey;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.button {
	width: 24px;
	height: 24px;
	background-repeat: no-repeat;
	background-size: contain;
	cursor: pointer;
	background-color: transparent;
    outline: none;
    border: none;
}
</style>

<script lang="ts" setup>
type Props = {
  img: 'help' | 'rollback' | 'plus',
}

defineProps<Props>()

</script>
