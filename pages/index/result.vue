<template>
	<view class="page flex flex-column flex-center p-4">
		<view class="text-center mb-6">
			<view class="success-icon mx-auto mb-4">
				<uni-icons type="checkmarkempty" :size="70" class="bg-success-light-3 rounded-circle" style="color:var(--xl-success-dark-2);"/>
			</view>
			<view class="mb-4 text-success-dark-2 font-weight-600 h6">订单提交成功</view>
			<view class="mb-4">订单审核通过后，我们将尽快安排邮寄</view>
			<view class="mb-4">查询订单状态及物流信息请点击：</view>
			<view class="bg-success-dark-1 text-white p-4 rounded-4"
			@tap="$page.switch('/pages/orders/query')">查询订单</view>
		</view>
		<image src="@/static/image-tips.png" mode="scaleToFill" class="tips"></image>
	</view>
</template>

<script lang="ts" setup>
import { $page } from '../../common/common';
</script>

<style lang="scss" scoped>
	.page{
		min-height:calc(100vh - var(--window-top))
	}
	.tips{
		width: 512rpx;
		height:684rpx;
	}

	.success-icon {
		width: 140rpx;
		height: 140rpx;
		transform: scale(0.8);
		animation: success-icon-an 3s ease-in-out infinite;
	}

	@keyframes success-icon-an {
		0% {
			transform: scale(0.8);
		}

		50% {
			transform: scale(1);
		}

		100% {
			transform: scale(0.8);
		}
	}
</style>
