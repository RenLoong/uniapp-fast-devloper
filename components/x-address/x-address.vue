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
				<view class="text-grey h9"><text class="text-primary" @tap="$base.openPage({url:'/member/pages/address/save'})">创建</text>一个收货地址吧~</view>
			</view>
		</view>
	</x-popup>
</template>

<script>
	export default {
		name:"x-address",
		props:{
			checked:{
				type:Number,
				default(){
					return null;
				}
			}
		},
		data() {
			return {
				showPopup:false,
				userAddress:{id:null},
				list:[]
			};
		},
		created() {
			this.getAddress();
			uni.$on('Update::UserAddress',this.getAddress);
		},
		unmounted() {
			uni.$off('Update::UserAddress',this.getAddress);
		},
		emits:['selected'],
		methods:{
			getAddress(){
				this.$base.get({
					url:'user/address/list'
				},ret=>{
					if(ret){
						if(ret.code===this.$base.config.ResponseCode.SUCCESS){
							this.list=ret.data;
							for (let i = 0; i < this.list.length; i++) {
								const item=this.list[i];
								if(this.checked){
									if(item.id===this.checked){
										this.selected(item);
										break;
									}
									continue;
								}
								if(item.is_default){
									this.selected(item);
									break;
								}
							}
						}
					}
				})
			},
			show(){
				this.showPopup=true;
			},
			selected(item){
				this.userAddress=item;
				this.$emit('selected',item);
				this.showPopup=false;
			}
		},
		expose:['show'],
	}
</script>

<style>

</style>