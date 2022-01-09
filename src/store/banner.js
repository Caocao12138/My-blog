// banner数据共享仓库

import { getBanners } from "@/api/banner";

export default {
    namespaced: true,
    state: {
        loading: false,
        data: [],
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
        async fetchBanner(ctx) {
            // console.log(ctx)
            if (ctx.state.data.length) {
                console.log("banner共享数据仓库数据已加载过了,无需重新加载");
                return;
            }
            ctx.commit("setLoading", true);
            const resp = await getBanners();
            ctx.commit("setData", resp);
            ctx.commit("setLoading", false);
        }
    }
}
