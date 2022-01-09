// 时间戳转换文件

// 参数: 时间戳
export default function (timestamp, showDate = false) {
    const date = new Date(+timestamp); // 创建时间
    const mouth = (date.getMonth() + 1).toString().padStart(2, "0"); //月份
    const day = date.getDate().toString().padStart(2, "0"); // 日期
    let str = `${date.getFullYear()}-${mouth}-${day}`;
    if (showDate) {
        const hours = date.getHours().toString().padStart(2, "0"); // 小时
        const minute = date.getMinutes().toString().padStart(2, "0"); // 分钟
        const second = date.getSeconds().toString().padStart(2, "0"); // 秒钟
        str += ` ${hours}:${minute}:${second}`
    }
    return str;
    // padStart(2, 0)   保证该字符串有2位数,不足2位数,设第一位为0
}