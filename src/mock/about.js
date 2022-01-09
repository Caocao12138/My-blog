// 关于我 mock数据

import Mock from "mockjs";

Mock.mock("/api/about", "get", {
    code: 0,
    msg: "",
    data: "https://www.baidu.com/#",
})

