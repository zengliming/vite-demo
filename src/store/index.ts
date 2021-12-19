// 引入插件
import createPersistedState from "vuex-persistedstate";
import { createStore } from "vuex";
import getters from '@/store/getters'
import app from '@/store/modules/app'
import settings from '@/store/modules/settings'
import user from '@/store/modules/user'
export default createStore({
  state() {
    return {
      name : "",
      enterpriseDescription: {}
    }
  },
  modules: {
    app,
    settings,
    user
  },
  getters,
  mutations: {
    setName(state: any, newName: any) {
      state.name=newName
    },
    saveEnterpriseDescription(state: any, enterpriseDescription: any) {
      state.enterpriseDescription = enterpriseDescription
    }
  },
  actions: {},
  plugins: [
    /* vuex数据持久化配置 */
    createPersistedState({
      // 存储方式：localStorage、sessionStorage、cookies
      storage: window.sessionStorage,
      // 存储的 key 的key值
      key: "store",
      render(state: any) {
        // 要存储的数据：本项目采用es6扩展运算符的方式存储了state中所有的数据
        return {...state};
      }
    })
  ]
})