<template>
	<x-popup v-model="showPopup">
		<view class="h8 font-weight-600 p-4 text-center">配送至</view>
		<view class="flex-1 flex overflow-hidden">
			<scroll-view scroll-y class="flex-1 h-100 bg-hover" v-if="list.length">
				<view class="p-5">
					<view class="bg-white rounded-4">
						<view class="flex flex-center border-top py-3 px-4 border-nth-1-0" v-for="(item,index) in list" :key="index"
						hover-class="bg-hover"
						@tap="selected(item)">
							<text class="iconfont icon-icon11 text-primary h8" v-if="userAddress.id===item.id"></text>
							<text class="iconfont icon-shouye6 text-grey h8" v-else></text>
							<view class="flex-1 pl-4">
								<view class="text-grey h10">{{item.province}}{{item.city}}{{item.area}}{{item.street}}</view>
								<view class="h8 font-weight-600 py-2">{{item.address}}</view>
								<view class="flex text-grey h10">
									<view class="flex-1">{{item.name}}</view>
									<view class="flex-1">{{item.mobile}}</view>
									<view class="flex-1"></view>
								</view>
							</view>
						</view>
					</view>
					
				</view>
			</scroll-view>
			<view class="flex-1 flex flex-center" v-else>
				<view class="text-grey h9"><text class="text-primary" @tap="$page.open({url:'/member/pages/address/save'})">创建</text>一个收货地址吧~</view>
			</view>
		</view>
	</x-popup>
</template>

<script lang="ts" setup>
import { $http, $page } from '@/common/common';
import { onMounted, ref } from "vue";
	const props = withDefaults(defineProps<{
		checked? : number
	}>(), {
	});
	const showPopup=ref(false);
	const userAddress=ref({
		id:null
	});
	const list=ref<any[]>([]);
	const getAddress=()=>{
			$http.get('user/address/list').then(ret=>{
				if(ret){
					if(ret.code===$http.ResponseCode.SUCCESS){
						list.value=ret.data;
						for (let i = 0; i < list.value.length; i++) {
							const item=list.value[i];
							if(props.checked){
								if(item.id===props.checked){
									selected(item);
									break;
								}
								continue;
							}
							if(item.is_default){
								selected(item);
								break;
							}
						}
					}
				}
			})
	}
	const emit=defineEmits(['selected']);
	const show=()=>{
		showPopup.value=true;
	}
	const selected=(item:any)=>{
		userAddress.value=item;
		emit('selected',item);
		showPopup.value=false;
	}
	onMounted(()=>{
		getAddress();
	})
	defineExpose({show});
</script>

<style>

</style>