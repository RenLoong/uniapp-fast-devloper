<template>
	<view class="x-popup-mask" :class="{'x-popup--show':state}" @tap="hide" @mousemove.stop>
		<view class="x-popup-content" :style="state?'top:'+top:'top:100vh'"
		@tap.stop>
			<slot />
		</view>
	</view>
</template>

<script>
	import {
		ref
	} from 'vue';
	export default {
		name: "x-popup",
		props: {
			modelValue:{
				type:[String,Number,Boolean]
			},
			top:{
				type:String,
				default(){
					return '50vh';
				}
			},
			autoHideTabBar:{
				type:Boolean,
				default(){
					return false;
				}
			},
		},
		emits: ['update:modelValue'],
		watch: {
			modelValue(val, oldVal) {
				this.state = val;
				if (val) {
					this.show();
				}else{
					if(this.autoHideTabBar)
					uni.showTabBar();
				}
			}
		},
		data() {
			return {
				state: false
			};
		},
		created() {
			this.state = this.modelValue;
		},
		methods: {
			show() {
				if(this.autoHideTabBar)
				uni.hideTabBar();
			},
			hide() {
				this.$emit('update:modelValue', false);
				if(this.autoHideTabBar)
				uni.showTabBar();
			}
		}
	}
</script>

<style lang="scss">
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
			top:100vh;
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
		&--show{
			top:0;
			background-color: rgba(0, 0, 0, .45);
		}
	}
</style>
