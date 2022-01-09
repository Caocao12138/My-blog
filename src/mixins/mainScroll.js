// 触发滚动条事件  mainScroll
/**
 * @param {String} refValue 滚动条元素的ref值
 * 
 * 当有区域需要要置顶元素是使用该混入
 * 
 */
export default function (refValue) {
    return {
        mounted() {
            this.$bus.$on("setMainScroll", this.handleSetMainScroll);
            this.$refs[refValue].addEventListener("scroll", this.handleScroll);
        },
        beforeDestroy() {
            // console.log("Detail滚动条监听销毁,组件混入mainScroll文件里");
            this.$bus.$emit("mainScroll");
            this.$refs[refValue].removeEventListener("scroll", this.handleScroll);
            this.$bus.$off("setMainScroll", this.handleSetMainScroll);
        },

        methods: {
            handleScroll() {
                this.$bus.$emit("mainScroll", this.$refs[refValue]);
            },
            handleSetMainScroll(scrollTop) {
                this.$refs[refValue].scrollTop = scrollTop;
            },
        }
    }
}

