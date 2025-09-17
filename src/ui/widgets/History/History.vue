<template>
<div>
history
</div>

</template>

<style lang="css" scoped>

</style>

<script lang="ts" setup>
import { eventBus, eventTypes } from '@/infra/EventBus';

eventBus.subscribe(eventTypes.figureMove, (data: unknown) => {
  const { detail } = data as { detail: any};
  console.log(detail);
})
</script>