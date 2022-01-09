<template>
  <ul class="my-contact-container">
    <li>
      <a target="_blank" :href="data.github">
        <div class="icon">
          <Icon type="github" />
        </div>
        <span>{{ data.githubName }}</span>
      </a>
    </li>
    <li>
      <a :href="`mailto:${data.mail}`"
        ><!-- 邮箱链接 -->
        <div class="icon">
          <Icon type="email" />
        </div>
        <span>{{ data.mail }}</span>
      </a>
    </li>
    <li>
      <a
        :href="`tencent://message/?Menu=yes&uin=${data.qq}&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45`"
        ><!-- qq聊天链接 -->
        <div class="icon">
          <Icon type="qq" />
        </div>
        <span>{{ data.qq }}</span>
      </a>
      <div class="pop">
        <img
          src="http://www.duyiedu.com/source/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.png"
          alt=""
        />
      </div>
    </li>
    <li>
      <a>
        <div class="icon">
          <Icon id="weixin" type="weixin" />
        </div>
        <span>{{ data.weixin }}</span>
      </a>
      <div class="pop">
        <img
          src="http://www.duyiedu.com/source/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.png"
          alt="<!-- 微信二维码 -->"
        />
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon";
import { mapState } from "vuex";
export default {
  name: "ContactMy",
  components: {
    Icon,
  },
  computed: {
    ...mapState("setting", ["data"]),
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.my-contact-container {
  list-style: none;
  padding: 20px;
  margin: 0;
  // color: @gray;
  // 自定义样式变量
  @itemHeight: 30px;
  li {
    height: @itemHeight;
    line-height: @itemHeight;
    margin: 16px 0;
    position: relative;
    cursor: pointer;
    &:hover {
      .pop {
        transform: scaleY(1);
      }
      a {
        color: @primary;
      }
    }
  }
  a {
    color: @gray;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 14px;
    span {
      margin-left: 8px;
    }
  }
  .icon {
    width: 36px;
    font-size: 26px;
    .icon-container {
      font-size: 32px;
    }
  }
  .pop {
    position: absolute;
    display: flex;
    left: 0;
    bottom: @itemHeight;
    margin: 6px 10px;
    transform: scaleY(0);
    transform-origin: bottom center;
    transition: 0.3s;
    img {
      border-radius: 6px;
      width: 120px;
      height: 120px;
    }
    &::after {
      content: "";
      width: 8px;
      height: 8px;
      background-color: #fff;
      display: block;
      position: absolute;
      left: 50%;
      bottom: -4px;
      transform: rotate(45deg);
    }
  }
  // 时间: 1: 04: 45s
}
#weixin {
  font-size: 38px;
  margin-left: -2px;
}
</style>
