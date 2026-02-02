<script setup lang="ts">
import RequestHelpButton from './RequestHelp/RequestHelpButton.vue';
import RollbackButton from './RollbackButton/RollbackButton.vue';

</script>

<template>
	<div class="wrapper">
		<RollbackButton/>
 		<RequestHelpButton/>
 	</div>
</template>

<style scoped>
.wrapper {
	display: flex;
	gap: 8px;
	position: absolute;
	right: 8px;
	bottom: 8px;
}

</style>