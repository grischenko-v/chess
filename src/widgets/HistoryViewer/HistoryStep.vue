<template>
	<span>
		{{step}}
	</span>
</template>

<script lang="ts" setup>

type Props = {
  step: string,
}

defineProps<Props>()
</script>