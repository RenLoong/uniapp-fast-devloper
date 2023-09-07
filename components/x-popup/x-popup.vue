<template>
	<view class="x-popup-mask" :class="{'x-popup--show':state}" @tap="hide" @mousemove.stop>
		<view class="x-popup-content" :style="state?'top:'+props.top:'top:100vh'" @tap.stop>
			<slot />
		</view>
	</view>
</template>

<script lang="ts" setup>
	import { ref, watchEffect } from 'vue';
	const props = withDefaults(defineProps<{
		modelValue : boolean,
		top ?: string,
		autoHideTabBar ?: boolean,
		limit ?: number
	}>(), {
		top: '50vh',
		autoLoad: false
	});
	const state = ref(false);
	const emit = defineEmits(['update:modelValue']);

	const show = () => {
		if (props.autoHideTabBar)
			uni.hideTabBar();
	}
	const hide = () => {
		emit('update:modelValue', false);
		if (props.autoHideTabBar)
			uni.showTabBar();
	}
	watchEffect(() => {
		state.value = props.modelValue;
		if (props.modelValue) {
			show();
		} else {
			if (props.autoHideTabBar)
				uni.showTabBar();
		}
	})
</script>

<style lang="scss" scoped>
	.x-popup {
		&-mask {
			overflow: hidden;
			position: fixed;
			left: 0;
			right: 0;
			top: 100%;
			bottom: 0;
			z-index: 1000;
			background-color: rgba(0, 0, 0, 0);
			transition: background-color .3s;
		}

		&-content {
			position: fixed;
			left: 0;
			right: 0;
			top: 100vh;
			bottom: 0;
			z-index: 1001;
			background-color: #FFFFFF;
			border-top-left-radius: 20rpx;
			border-top-right-radius: 20rpx;
			overflow: hidden;
			transition: top .5s;
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
		}

		&--show {
			top: 0;
			background-color: var(--xl-mask);
		}
	}
</style>