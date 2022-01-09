// 项目 \ 效果 Mock数据

import Mock from "mockjs";

Mock.mock(/^\/api\/project\/?$/, "get", {
    code: 0,
    msg: "",
    "data|10-50": [
        {
            id: "@uuid",
            name: "@ctitle(3,10)",
            "url|1": ["@url('http')", null],
            "github|1": ["@url", null],
            "description|1-4": ["@cparagraph(1,5)"],//描述 段落1-5
            thumb: "@image(240x180,@color,#fff,@natural)",
        }
    ]
})
