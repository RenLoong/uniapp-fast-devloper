<template>
	<view class="page flex-center">
		<view class="p-10">
			<view class="mb-10">
				<text class="h1 text-primary-dark-2 font-weight-bold text-spacing-10">订单查询</text>
			</view>
			<view class="flex bg-grey rounded-4 overflow-hidden p-4 mb-4">
				<input v-model="form.mobile" type="tel" maxlength="11" class="flex-1 h6 font-weight-600"
					placeholder="收货人手机号" placeholder-class="h9">
			</view>
			<view class="flex bg-grey rounded-4 overflow-hidden p-4 mb-4">
				<input v-model="form.idcard" type="idcard" maxlength="18" class="flex-1 h6 font-weight-600"
					placeholder="身份证号" placeholder-class="h9">
			</view>
			<view class="bg-primary-dark-1 text-center text-white font-weight-600 h8 rounded-4 p-4" @tap="submit">
				<text class="text-spacing-10">查询</text>
			</view>
		</view>
		<view class="w-100 p-10">
			<view class="h10 text-dark-light-5">查询历史</view>
			<view class="bg-grey rounded-4 mt-4 p-4 flex flex-center" v-for="item in 5">
				<view class="flex-1">
					<view class="h8 font-weight-600">18784613848</view>
					<view class="h10 text-dark-light-5">513134341384131131</view>
				</view>
				<view class="h10 text-dark-light-5">2023年9月7日17点15分</view>
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
	import { reactive } from "vue";
	import { $page } from "../../common/common";
	const form = reactive({
		mobile: '',
		idcard: ''
	})
	const submit = () => {
		$page.open({
			url: '/pages/orders/orders'
		})
	}
</script>

<style>
	.page {
		min-height: calc(100vh - var(--window-bottom));
	}
</style>