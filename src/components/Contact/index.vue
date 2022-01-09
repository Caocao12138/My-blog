<template>
  <ul class="contact-container">
    <li>
      <a>
        <Icon type="github" />
        <p>Caocao12138</p>
      </a>
    </li>
    <li>
      <a>
        <Icon type="email" />
        <p>Yuyic6@163.com</p>
      </a>
    </li>
    <li>
      <a>
        <Icon type="qq" />
        <p>2473329975</p>
      </a>
    </li>
    <li>
      <img
        src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=528676435,1806536374&fm=11&gp=0.jpg"
        alt=""
      />
      <a>
        <Icon type="weixin" />
        <p>17520350929</p>
      </a>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  name: "Contact",
  components: {
    Icon,
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.contact-container {
  margin-top: 140px;
  width: 100%;
  height: 1600px;
  background-color: @dark;
  font-size: 16px;
}
li {
  list-style: none;
  position: relative;
}
li:hover {
  img {
    transform: scale(1);
  }
}

img {
  width: 150px;
  height: 150px;
  border-radius: 6px;
  transform: scaleY(0);
  transform-origin: center bottom;
  transition: 1.5s;
  ::after {
    content: "";
    width: 10px;
    height: 10px;
    background-color: #fff;
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: rotate(45deg);
  }
}
.icon-container {
  vertical-align: middle;
  font-size: 24px;
}
p {
  vertical-align: middle;
  display: inline-block;
  margin-left: 10px;
}
a {
  display: block;
  color: @gray;
  text-decoration: none;
  height: 40px;
  width: 100%;
  cursor: pointer;
}
a:hover {
  color: #fff;
}
</style>