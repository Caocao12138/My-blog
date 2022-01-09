// #导入其他mock文件
import "./banner";
import "./blog";
import "./setting";
import "./about";
import "./project";
import "./message"

import Mock from "mockjs";
// 模拟网络延迟 1000 - 2000ms
Mock.setup({
    timeout: "1000-2000"
})