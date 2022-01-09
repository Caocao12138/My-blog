// 个人信息数据共享仓库

import { getSetting } from "@/api/setting";

import { webTitle } from "@/utils";

export default {
    namespaced: true,
    state: {
        loading: false,
        data: null,
    },
    mutations: {
        setLoading(state, payload) {
            state.loading = payload;
        },
        setData(state, payload) {
            state.data = payload;
        },
    },
    actions: {
        async fetchSetting(ctx) {
            ctx.commit("setLoading", true);
            const resp = await getSetting();
            // console.log(resp) // mock数据
            ctx.commit("setData", resp);
            ctx.commit("setLoading", false);
            if (resp.siteTitle) {
                // console.log(resp)
                webTitle.setSiteTitle(resp.siteTitle)
            }
        }
    }
}
