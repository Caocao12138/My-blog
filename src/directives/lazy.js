/**
 * 图片懒加载v-lazy指令
 */

import eventBus from "@/eventBus";
import { debounce } from "@/utils";
import defaultGifImage from "@/assets/default.gif";

let imgs = []; // 存储图片

// #在视口范围内更换真实的文章图片
function setImage(img) {
    img.dom.src = defaultGifImage;
    const rect = img.dom.getBoundingClientRect();
    const clientHeight = document.documentElement.clientHeight;
    const height = rect.height || 180;
    if (rect.top >= -height && rect.top <= clientHeight) {
        // 在视口范围内
        const tempImg = new Image(); // img标签
        tempImg.onload = function () {
            // 真实图片加载完成
            img.dom.src = img.src;
        }
        tempImg.src = img.src;
        // console.log("加载真实图片", img.dom)
        imgs = imgs.filter(i => i !== img);
    }
}

// #在视口范围内更换真实的文章图片
function setImages(e) {
    for (const img of imgs) {
        // console.log(img);
        setImage(img)
    }
}

// #滚动条
function handleScroll() {
    setImages();
}

eventBus.$on("mainScroll", debounce(handleScroll, 200))


export default {
    inserted(el, bindings) {
        const img = {
            dom: el,
            src: bindings.value,
        }
        imgs.push(img);
        setImage(img)
    },
    unbind(el) {
        imgs = imgs.filter(img => img.dom !== el)
    }
}