<template>
	<view class="page">
		<swiper class="banner-swiper bg" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000"
			indicator-color="rgba(255,255,255,.75)" indicator-active-color="#006EFF">
			<swiper-item>
				<image src="https://hk.iyunqian.cn/upload/2bn.png" mode="scaleToFill" class="banner-swiper-image">
				</image>
			</swiper-item>
			<swiper-item>
				<image src="https://hk.iyunqian.cn/upload/2bn.png" mode="scaleToFill" class="banner-swiper-image">
				</image>
			</swiper-item>
			<swiper-item>
				<image src="https://hk.iyunqian.cn/upload/2bn.png" mode="scaleToFill" class="banner-swiper-image">
				</image>
			</swiper-item>
		</swiper>
		<view class="flex bg-white flex-center mb-4">
			<view class="px-4">
				<uni-icons type="notification" color="#999999"></uni-icons>
			</view>
			<swiper class="notify-swiper flex-1" :autoplay="true" :interval="3000" :duration="1000" vertical>
				<swiper-item class="" v-for="item in 10">
					<view class="text-warning h10 font-weight-600 notify-swiper-title">公告</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="shop-info bg-white p-4 flex flex-center bg-shop">
			<view class="flex-1 font-weight-600 text-white">店铺名称</view>
		</view>
		<scroll-view class="position-sticky bg-white" scroll-y="false" scroll-x="true" show-scrollbar="false">
			<view class="flex px-4 font-weight-600">
				<view class="text-nowrap p-4">推荐</view>
				<view class="text-nowrap p-4" v-for="item in 20">电信</view>
			</view>
		</scroll-view>
		<view class="p-4 list">
			<view class="bg-white rounded-4 p-3 flex list-item mb-4" v-for="item in 20">
				<image src="https://static.91haoka.cn/1689092658oiV.jpg" mode="scaleToFill"
					class="list-item-image rounded-4"></image>
				<view class="flex-1 pl-4 flex flex-column">
					<view class="font-weight-600">MF中国移动花卡宝藏版中国移动花卡宝藏版</view>
					<view class="text-placeholder h10 pt-2">19元80G全国流量+0.1元/分钟</view>
					<view class="flex-1"> </view>
					<view class="flex flex-y-center">
						<text class="text-white bg-shop rounded-5 h10 px-2 py-1 list-item-tips text-nowrap">
							收货地是归属地,可选号,16-60周岁
						</text>
						<view class="flex-1"></view>
						<view class="list-item-btn text-nowrap h10 text-white bg-primary ml-2 px-4 py-1 rounded-6">立即办理</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
	import { onLoad } from '@dcloudio/uni-app'
	onLoad(() => { })
</script>


<style lang="scss" scoped>
	.page {
		background-color: var(--xl-grey);
		min-height: 300vh;
	}

	.position-sticky {
		position: sticky;
		top: constant(safe-area-inset-top);
		top: env(safe-area-inset-top);
		z-index: 10;
	}

	.banner-swiper {
		height: 450rpx;

		&-image {
			width: 100%;
			height: 100%;
		}
	}

	.notify-swiper {
		height: 80rpx;
		background-color: var(--xl-bg-white);

		&-title {
			line-height: 80rpx;
		}
	}

	.bg-shop {
		background-image: linear-gradient(160deg, var(--xl-primary-dark-2) 20%, var(--xl-primary-light-2) 60%);
	}

	.shop-info {}

	.list {
		&-item {
			&-image {
				width: 200rpx;
				height: 200rpx;
			}
			&-tips{
				overflow: hidden;
				text-indent: 100%;
				animation: itemtips 10s linear infinite;
			}
		}
	}
	@keyframes itemtips {
		from{
			text-indent: 100%;
		}
		to{
			text-indent: -150%;
		}
	}
</style>