import request from "./request";

/**
 * 获取博客列表数据
 * @param {number} page 当前页码
 * @param {number} limit 页容量
 * @param {number} categoryid 所属分类, -1表示全部
 * @returns 
 */
export async function getBlogs(page = 1, limit = 10, categoryid = -1) {
    // console.log(categoryid, limit, page); // 测试BlogList文件getBlogs()函数是否生效
    return await request.get("/api/blog", {
        params: {
            page,
            limit,
            categoryid,
        },
    });
};

/**
 * 获取博客分类
 */
export async function getBlogTypes() {
    return await request.get("/api/blogtype");
};


/**
 * 获取博客
 * params: id`为博客的id
 */
export async function getBlog(id) {
    return await request.get(`/api/blog/${id}`)
}

/**
 * 提交评论
 * @param {Object} commentInfo
 */
export async function postComment(commentInfo) {
    return await request.post(`/api/comment`, commentInfo)
}

/**
 * 分页获取评论
 * @param {Number} blogid 所属文章，-1表示不限
 * @param {Number} page 当前页码
 * @param {Number} limit 页容量
 */
export async function getComments(blogid, page = 1, limit = 10) {
    return await request.get("/api/comment", {
        params: {
            // 网页地址栏的参数 ?后面的数值
            blogid,
            page,
            limit
        }
    })
}


