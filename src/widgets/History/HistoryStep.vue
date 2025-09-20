<template>
	<span class="step">
		{{step}}
	</span>
</template>

<style scoped>
.step {
	padding: 4px;
}
</style>

<script lang="ts" setup>

type Props = {
  step: string,
}

defineProps<Props>()
</script>