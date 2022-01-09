// 获取远程数据的公共代码  // 组件混入

export default function (defaultDataValue = null) {
    return {
        data() {
            return {
                isLoading: true,
                data: defaultDataValue
            }
        },
        async created() {
            this.data = await this.fetchData();
            this.isLoading = false;
        },
    };
}

