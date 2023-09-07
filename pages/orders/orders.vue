<template>
	<view class="page flex-center">
		<view class="p-4">
			<view class="p-4 rounded-4 bg-white mb-4 flex flex-center" v-for="item in 10">
				<view class="flex-1">
					<view class="h8 font-weight-600 mb-4">MF中国移动花卡宝藏版</view>
					<view class="h10 text-dark-light-3">下单时间：2023-09-07 16:47:58</view>
					<view class="h10 text-dark-light-3">订单编号：YQHK2023090716475823966</view>
				</view>
				<view class="bg-shop text-white rounded-round px-4 py-2 h10 font-weight-600">查看详情</view>
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
</script>

<style>
	.page {
		background-color: var(--xl-grey);
		min-height: calc(100vh - var(--window-top));
	}
</style>