<script lang="ts" setup>
	import { onLaunch,onShow,onHide } from '@dcloudio/uni-app'
import { useStorage } from './common/common';
	onLaunch((options?:any)=>{
		const storeage=useStorage();
		const token=options.query?.token||storeage.get('APP_TOKEN');
		if(token){
			storeage.set('APP_TOKEN',token);
		}else{
			uni.showModal({
				content:'授权地址不正确，请重新访问',
				showCancel:false
			})
		}
	})
	onShow(()=>{
		console.log('App Show');
	})
	onHide(()=>{
		console.log('App Hide');
	})
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "static/common.scss";
</style>
