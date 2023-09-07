<template>
	<view class="flex flex-y-center">
		<view class="border-top flex-1"></view>
		<div class="px-3">{{text}}</div>
		<view class="border-top flex-1"></view>
	</view>
</template>

<script lang="ts" setup>
	const props = withDefaults(defineProps<{
		text ?: string
	}>(), {
		text: ''
	});
</script>

<style lang="scss">

</style>