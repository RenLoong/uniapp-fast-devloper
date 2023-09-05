import { StoreGeneric, defineStore, storeToRefs } from 'pinia'
import UserStore from "./modules/user";
export const useUserStore = defineStore('user', UserStore)


export const useRefs = (store: StoreGeneric) => {
    return storeToRefs(store);
}