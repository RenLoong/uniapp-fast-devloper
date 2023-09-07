<template>
	<view class="page flex-center">
		<view class="p-4">
			<view class="p-4 rounded-4 bg-white mb-4 flex flex-center" v-for="item in 10">
				<view class="flex-1">
					<view class="h8 font-weight-600 mb-4">MF中国移动花卡宝藏版</view>
					<view class="h10 text-dark-light-3">下单时间：2023-09-07 16:47:58</view>
					<view class="h10 text-dark-light-3">订单编号：YQHK2023090716475823966</view>
				</view>
				<view class="bg-shop text-white rounded-round px-4 py-2 h10 font-weight-600" @tap="showDetails">查看详情
				</view>
			</view>
		</view>
		<x-popup v-model="state">
			<view class="p-4 bg-grey text-dark-light-2 font-weight-600 text-center">订单详情</view>
			<view class="flex-1 flex overflow-hidden p-4">
				<scroll-view class="flex-1 h-100" scroll-y>
					<view class="flex flex-y-center py-2">
						<view class="label">套餐内容</view>
						<view class="content">19元80G全国流量+0.1元/分钟</view>
					</view>
					<view class="flex flex-y-center py-2">
						<view class="label">物流单号</view>
						<view class="content">暂未发货</view>
					</view>
					<view class="flex flex-y-center py-2">
						<view class="label">真实姓名</view>
						<view class="content">测试</view>
					</view>
					<view class="flex flex-y-center py-2">
						<view class="label">证件号码</view>
						<view class="content">11010120******1102</view>
					</view>
					<view class="flex flex-y-center py-2">
						<view class="label">联系电话</view>
						<view class="content">18888888888</view>
					</view>
					<view class="flex flex-y-center py-2">
						<view class="label">收货地址</view>
						<view class="content">北京北京市东城区测试的我</view>
					</view>
					<view class="flex flex-y-center py-2">
						<view class="label">选购号码</view>
						<view class="content">19520451371</view>
					</view>
					<view class="flex flex-y-center py-2">
						<view class="label">订单状态</view>
						<view class="content">订单终止</view>
					</view>
				</scroll-view>
			</view>
		</x-popup>
	</view>
</template>

<script lang="ts" setup>
	import { ref } from "vue";
	const state = ref(false)
	const showDetails = () => {
		state.value = !state.value;
	}
</script>

<style>
	.page {
		background-color: var(--xl-grey);
		min-height: calc(100vh - var(--window-top));
	}

	.label {
		width: 160rpx;
		color: var(--xl-dark-light-5);
	}
</style>