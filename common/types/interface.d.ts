
export { };
declare global {
	interface StorageInterface{
		setItem:(key:string,data:any)=>Promise<any>,
		getItem:(key:string)=>any,
		removeItem:(key:string)=>Promise<any>
	}
	interface ConfigInterface {
		storagePrefix : string,
		URLModule : string,
		storage : StorageInterface,
	}
	interface ResponseInterface {
		code ?: number | string,
		data ?: any,
		msg ?: string,
		[propName : string] : any
	}

	interface UserInfoInterface {
		nickname ?: string,
		token ?: string,
		permissions ?: string[],
		[propName : string] : any
	}
}