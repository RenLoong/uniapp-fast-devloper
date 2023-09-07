<template>
	<view class="page bg-shop pb-safe-area pt-safe-area">
		<view class="p-4">
			<swiper class="banner-swiper mb-4" :indicator-dots="details.thumb.length>1" :autoplay="true"
				:interval="3000" :duration="1000" indicator-color="rgba(255,255,255,.75)"
				indicator-active-color="#006EFF">
				<swiper-item v-for="url in details.thumb">
					<image :src="url" mode="scaleToFill" class="banner-swiper-image rounded-4">
					</image>
				</swiper-item>
			</swiper>
			<view class="rounded-4 bg-white overflow-hidden mb-4">
				<view class="bg-shop">
					<swiper class="notify-swiper flex-1" :autoplay="true" :interval="3000" :duration="1000" vertical>
						<swiper-item class="px-4 flex flex-center" v-for="item in 10">
							<image src="../../static/logo.png" mode="scaleToFill" class="notify-swiper-image"></image>
							<view class="flex-1 text-white h10 font-weight-600 notify-swiper-title pl-4">
								来自珠海的132****5282用户已领取；</view>
						</swiper-item>
					</swiper>
				</view>
				<view class="p-4 text-dark-light-3">
					<view class="bg-grey rounded-2 flex flex-center mb-4">
						<text class="font-weight-600 h9 text-primary px-4">选择号码</text>
						<input type="text" class="flex-1 p-4 font-weight-600 text-dark" placeholder="请选择你喜欢的号码"
							placeholder-class="h10">
					</view>
					<view class="bg-grey rounded-2 flex flex-center mb-4">
						<text class="font-weight-600 h9 px-4">真实姓名</text>
						<input type="text" class="flex-1 p-4 font-weight-600 text-dark" placeholder="请填写真实姓名"
							placeholder-class="h10">
					</view>
					<view class="bg-grey rounded-2 flex flex-center mb-4">
						<text class="font-weight-600 h9 px-4">收货地址</text>
						<input type="text" class="flex-1 p-4 font-weight-600 text-dark" placeholder="请选择省市区"
							placeholder-class="h10">
					</view>
					<view class="bg-grey rounded-2 flex flex-center mb-4">
						<text class="font-weight-600 h9 px-4">详细地址</text>
						<input type="text" class="flex-1 p-4 font-weight-600 text-dark"
							placeholder="请输入详细地址（*街道*门牌号*小区）" placeholder-class="h10">
					</view>
					<view class="bg-grey rounded-2 flex flex-center mb-4">
						<text class="font-weight-600 h9 px-4">联系电话</text>
						<input type="text" class="flex-1 p-4 font-weight-600 text-dark" placeholder="请输入收件人电话，并注意接听"
							placeholder-class="h10">
					</view>
					<view class="bg-grey rounded-2 flex flex-center mb-4">
						<text class="font-weight-600 h9 px-4">身份证号</text>
						<input type="text" class="flex-1 p-4 font-weight-600 text-dark" placeholder="请填写身份证号(运营商审核使用)"
							placeholder-class="h10">
					</view>
					<view class="flex flex-center text-white bg-shop p-4 rounded-round submit-btn mb-4">
						<text class="font-weight-600 h6">提交办理</text>
					</view>
					<view class="flex flex-center h9 flex-wrap">
						<uni-icons type="circle-filled" color="#4772CF"></uni-icons>
						<text class="ml-2">我已阅读并同意</text>
						<text class="text-primary">《信息收集公告》</text>
						<text>及</text>
						<text class="text-primary">《入网协议》</text>
					</view>
				</view>
			</view>
			<view class="rounded-4 bg-white overflow-hidden mb-4">
				<view class="bg-warning-light-3 text-center p-4 text-danger font-weight-600">热门评论</view>
				<view class="p-4 comment-list">
					<view class="comment-list-body" :style="{'--translate-duration':Math.ceil(100/1)+'s'}">
						<view class="flex flex-center py-2" v-for="item in 100">
							<image src="../../static/logo.png" mode="scaleToFill" class="comment-list-image"></image>
							<view class="flex-1 h10 comment-list-title pl-4 font-weight-600">
								<view class="pb-2"> 来自珠海的132****5282用户已领取； </view>
								<view class="text-dark-light-5">好用，真的好用~~~~ </view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="rounded-4 bg-white">
				
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
	const details = {
		thumb: ['https://static.91haoka.cn/1689092658oiV.jpg']
	}
</script>

<style lang="scss" scoped>
	.banner-swiper {

		height: 788rpx;

		&-image {
			width: 100%;
			height: 100%;
		}
	}

	.notify-swiper {
		height: 80rpx;

		&-image {
			width: 60rpx;
			height: 60rpx;
			border-radius: 30rpx;
		}

		&-title {
			line-height: 80rpx;
		}
	}

	.submit-btn {
		transform: scale(0.8);
		animation: submit-btn-an 5s ease-in-out infinite;
	}

	@keyframes submit-btn-an {
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

	.comment-list {
		height: 400rpx;
		overflow: hidden;
		--translate-duration:50s;

		&-body {
			transform: translateY(0%);
			animation-timing-function: linear;
			animation-name: translate--150;
			animation-duration: var(--translate-duration);
			animation-iteration-count: infinite;
		}

		&-image {
			width: 60rpx;
			height: 60rpx;
			border-radius: 30rpx;
		}
	}

	@keyframes translate--150 {
		from {
			transform: translateY(0%);
		}

		to {
			transform: translateY(-100%);
		}
	}
</style>