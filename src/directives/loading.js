import loadingUrl from "@/assets/loading.svg";
import styles from "./loading.module.less"

// 得到el中loading元素
function isLoadingImg(el) {
    return el.querySelector('img[data-role=loading]');
}

// 创建loading元素
function createLoading() {
    const img = document.createElement('img');
    img.dataset.role = 'loading'; // 自定义属性
    img.src = loadingUrl;
    img.className = styles.loading;
    return img;
}

// 导出loading指令的配置对象
export default function (el, bingding) {
    // console.log(bingding)
    // 根据 bingding.value 的值,决定创建或删除 loading 的元素
    const curImg = isLoadingImg(el); // 当前img
    if (bingding.value) {
        if (!curImg) {
            // 如果没有loading元素
            const img = createLoading();
            el.appendChild(img);
        }
    } else {
        if (curImg) {
            curImg.remove();
        }
    }
}