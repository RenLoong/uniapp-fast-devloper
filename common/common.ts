import { useUserStore } from "../stores";
import config from "./config";
export const useStorage = () => {
    /**
     * 设置储存数据
     * @param key 键
     * @param data 值
     * @param expire 过期时间（秒）
     * @returns Promise
     */
    const set = (key: string, data: any, expire?: number): Promise<any> => {
            const obj = {
                expire: 0,
                data: data,
            }
            if (expire !== undefined) {
                obj.expire = Date.now() + expire * 1000
            }
            return config.storage.setItem(getKey(key), obj);
    }
    /**
     * 获取储存数据
     * @param key 键
     * @returns any
     */
    const get = (key: string): any => {
        const data = config.storage.getItem(getKey(key));

        if (data === null) {
            return null;
        }

        if (data?.expire > 0 && data?.expire < Date.now()) {
            return null;
        }
        return data?.data;
    }
    /**
     * 删除储存数据
     * @param key 键
     * @returns Promise
     */
    const remove = (key: string): Promise<any> => {
        return config.storage.removeItem(getKey(key));
    }
    /**
     * 获取数据并删除
     * @param key 键
     * @returns any
     */
    const getOnce = (key: string): any => {
        const data = get(key);
        remove(key);
        return data;
    }
    /**
     * 获取真实存储键名
     * @param key 键
     * @returns string
     */
    const getKey = (key: string): string => {
        return `${config.storagePrefix}.${key}`;
    }
    return { set, get, remove, getOnce, getKey };
}

let baseURL = '//' + globalThis.location.host + '/'
if (baseURL.endsWith("//")) {
    baseURL = baseURL.replace(/\/\/$/, "/");
}
const RequestHeaders=(options?:any)=>{
	const header={};
	const {getToken,hasLogin}=useUserStore();
	if(hasLogin()){
		header['Authorization']=getToken();
	}
	if(options&&options.header){
		for (let x in options.header) {
			header[x]=options.header[x]
		}
	}
	return header;
}
export const $http = {
    ResponseCode: {
        SUCCESS: 200,
        NEED_LOGIN: 600,
        PAY_SUCCESS: 9000
    },
    baseURL,
    get: (url:string,options?:any):Promise<any>=>{
		return new Promise((resolve,reject)=>{
			uni.request({
				...options,
				header:RequestHeaders(options),
				url:baseURL+url,
				success:(res:any)=>{
					if(res.statusCode===200){
						resolve(res.data);
					}else{
						reject(res);
					}
				},
				fail:(err:any)=>{
					reject(err);
				},
				complete:()=>{}
			})
		})
	},
    post: (url:string,options:any):Promise<any>=>{
		return new Promise((resolve,reject)=>{
			uni.request({
				...options,
				header:RequestHeaders(options),
				url:baseURL+url,
				method:'POST',
				success:(res:any)=>{
					if(res.statusCode===200){
						resolve(res.data);
					}else{
						reject(res);
					}
				},
				fail:(err:any)=>{
					reject(err);
				},
				complete:()=>{}
			})
		})
	},
	upload:(url:string,options:any): UniApp.UploadTask | Promise<UniApp.UploadFileSuccessCallbackResult>=>{
		return uni.uploadFile({
			...options,
			header:RequestHeaders(options),
			url:baseURL+url
		})
	}
}
export const $page={
	open:(params:UniApp.NavigateToOptions | string)=>{
		let options:UniApp.NavigateToOptions={
			url:''
		};
		if(typeof params==='string'){
			options.url=params;
		}else{
			options=Object.assign(options,params);
		}
		uni.navigateTo(options)
	},
	switch:(params:UniApp.SwitchTabOptions|string)=>{
		let options:UniApp.SwitchTabOptions={
			url:''
		};
		if(typeof params==='string'){
			options.url=params;
		}else{
			options=Object.assign(options,params);
		}
		uni.switchTab(options);
	}
}