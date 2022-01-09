// 关于我 Vuex 共享仓库

import { getAbout } from "@/api/about"

export default {
    namespaced: true,
    state: {
        loading: false,
        data: "",
    },
    mutations: {
        setLoading(state, payload) {
            state.loading = payload
        },
        setData(state, payload) {
            state.data = payload
        },
    },
    actions: {
        async fetchAbout(ctx) {
            // 如果数据已经有了,则不需要再次请求加载
            if (ctx.state.data) {
                return
            }
            ctx.commit("setLoading", true);
            const resp = await getAbout();
            ctx.commit("setData", resp);
            ctx.commit("setLoading", false);
        }
    }
}