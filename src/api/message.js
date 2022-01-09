import request from "./request";

// 获取留言
export async function getMessages(page = 1, limit = 10,) {
    return await request.get("/api/message", {
        params: {
            page,
            limit,
        },
    });
};

// 创建提交留言
export async function postMessage(msgInfo) {
    return await request.post("/api/message", msgInfo);
}