<template>
	<view class="flex flex-y-center">
		<view class="border-top flex-1"></view>
		<div class="px-3">{{text}}</div>
		<view class="border-top flex-1"></view>
	</view>
</template>

<script>
	export default {
		name:"x-more",
		props:{
			text:{
				type:String,
				default(){
					return '';
				}
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">

</style>