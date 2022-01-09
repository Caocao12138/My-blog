import getComponentRootDom from "./getComponentRootDom";
import Icon from "@/components/Icon";
import styles from "./showMessage.module.less";

/**
 * 弹出消息
 * @param {String} content 消息内容
 * @param {String} type Info 正常消息 Error 错误信息 success 正确信息 warn 警告信息
 * @param {Number} duration 显示时长
 * @param {HtmlElement} container 元素容器,消息显示在容器的正中间; 如果不传参,则显示页面正中间
 */

export default function (options = {}) {
    const content = options.content || "";
    const type = options.type || "info";
    const duration = options.duration || 2000;
    const container = options.container || document.body;

    // 创建消息元素
    const div = document.createElement("div");
    const iconDom = getComponentRootDom(Icon, {
        type,
    });
    div.innerHTML = `<span class="${styles.icon}">${iconDom.outerHTML}</span><div>${content}</div>`

    // #设置样式
    // console.log(styles);
    const typeClassName = styles[`message-${type}`]; // 类型样式名
    div.className = `${styles.message} ${typeClassName}`;

    // 判断容器的position是否为默认值
    if (options.container) {
        if (getComputedStyle(container).position === "static") {
            container.style.position = "relative";
        }
    }
    container.appendChild(div);

    div.clientHeight; // 浏览器可以渲染. 渲染作用: 为了实现过渡动画
    div.style.opacity = 1;
    div.style.transform = `translate(-50%,-50%)`;

    setTimeout(() => {
        div.style.opacity = 0;
        div.style.transform = `translate(-50%, -50%) translateY(-40px)`;
        div.addEventListener("transitionend", function () {
            div.remove();
            // 运行回调函数
            options.callback && options.callback(); // 如果有回调函数(callback) 就运行 callback
        }, { once: true }); // once: true 表示事件只触发一次
    }, duration);
}