let URLModule = globalThis.location.pathname.replace(/^\/|\/$/g, '');
const storage = {
	setItem: (key : string, data : any) : Promise<any> => {
		return uni.setStorage({
			key,
			data
		})
	},
	getItem: (key : string) : any => {
		return uni.getStorageSync(key)
	},
	removeItem: (key : string) : Promise<any> => {
		return uni.removeStorage({
			key
		})
	}
};
export default {
	storagePrefix: URLModule ? URLModule.toUpperCase() : 'NUMBERCARD',
	storage,
	URLModule,
} as ConfigInterface;