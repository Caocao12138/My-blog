/* 事件总线 源代码 
const listeners = {};

export default {
    // 开始监听某个事件
    $on(eventName, handler) {
        if (!listeners[eventName]) {
            listeners[eventName] = new Set();
        }
        listeners[eventName].add(handler)
    },
    // 取消监听某个事件
    $off(eventName, handler) {
        if (!listeners[eventName]) {
            return;
        }
        listeners[eventName].delete(handler)
    },
    // 触发事件
    $emit(eventName, ...args) {
        if (!listeners[eventName]) {
            return
        }
        for (const handler of listeners[eventName]) {
            handler(...args);
        }
    }
}
*/

/**
 * 事件名: mainScroll
 * 含义: 主区域滚动条位置变化后触发
 * 参数: 
 *  - 滚动的dom元素, 如果是undefined,则表示该dom元素已销毁
 * 
 * 
 * 
 * 事件名: setMainScroll
 * 含义: 当需要设置主区域滚动条位置时触发
 * 参数: 
 *  - 滚动高度 
 * 
 */

import Vue from "vue";
const eventBusVue = new Vue({})
Vue.prototype.$bus = eventBusVue;// 自定义配置

export default eventBusVue;