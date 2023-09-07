<template>
	<view class="p-4">
		<mp-html :content="content" selectable class="text-wrap content"></mp-html>
	</view>
</template>

<script lang="ts" setup>
import { ref } from "vue";
	const content=ref(`<div class="hzt-pop-box-inner">
        <div class="hzt-tit">
          微信号: <span class="message">516166</span>
        </div>
        <div class="hzt-info">
          长按识别下方二维码添加微信
        </div>
        <img class="qrcode" style="width: 70%!important" src="" alt="">
        <div class="open-wx-btn" style="margin-top:10px;">
          <a href="weixin://" class="btnEl">联系客服</a>
        </div>
      </div>`);
</script>

<style lang="scss" scoped>
	.content img{
		max-width: 100%;
	}
</style>
