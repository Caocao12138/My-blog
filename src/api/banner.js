import request from "./request";

export async function getBanners() {
    // http://localhost:8080    http协议 端口号 可以省略,因为通过代理解决的代理,因此在同域下面不同跨域
    // console.log("获取数据成功")
    return await request.get("/api/banner");
}