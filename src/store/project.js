// 项目效果共享仓库

import { getProject } from "@/api/project"

export default {
    namespaced: true,
    state: {
        loading: false,
        data: [],
    },
    mutations: {
        setLoading(state, payload) {
            state.loading = payload
        },
        setData(state, payload) {
            state.data = payload
        }
    },
    actions: {
        async fetchProject(ctx) {
            if (ctx.state.data.length) {
                // 如果有存在数据,就不需要再次请求加载
                return
            };
            ctx.commit("setLoading", true);
            const resp = await getProject();
            ctx.commit("setData", resp);
            ctx.commit("setLoading", false);
        }
    }
}