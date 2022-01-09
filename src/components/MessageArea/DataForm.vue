<template>
  <form
    id="data-form-container"
    class="data-form-container"
    @submit.prevent="handleSubmit"
    ref="dataContainer"
  >
    <div class="form-item">
      <div class="input-area">
        <input
          type="text"
          placeholder="请输入你的昵称"
          v-model="formData.nickname"
          maxlength="10"
        />
        <span class="tip">{{ formData.nickname.length }}/10</span>
      </div>
      <div class="error">{{ error.nickname }}</div>
    </div>
    <div class="form-item">
      <div class="text-area">
        <textarea
          placeholder="请输入你的评论内容"
          v-model="formData.content"
          maxlength="300"
        ></textarea>
        <span class="tip">{{ formData.content.length }}/300</span>
      </div>
      <div class="error">{{ error.content }}</div>
    </div>
    <div class="form-item">
      <div class="buttom-area">
        <button :disabled="isSubmiting">
          {{ isSubmiting ? "提交中..." : "提交" }}
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { showMessage } from "@/utils";
export default {
  name: "DataForm", // 提交评论表单
  data() {
    return {
      formData: {
        nickname: "",
        content: "",
      },
      error: {
        nickname: "",
        content: "",
      },
      isSubmiting: false, //按钮状态属性
    };
  },
  methods: {
    // #表单提交事件函数
    handleSubmit() {
      // 提交表单先验证输入框内容
      this.error.nickname = this.formData.nickname ? "" : "请输入昵称";
      this.error.content = this.formData.content ? "" : "请输入评论内容";
      // 有错误输入时就不能提交
      if (this.error.nickname || this.error.content) {
        // 提交失败弹窗提示
        showMessage({
          content: `提交失败, 请输入正确内容`,
          type: "error",
          duration: 2000,
        });
        return;
      }
      // 没有错误正常运行
      this.isSubmiting = true; // 正在提交,防止重复点击
      this.$emit("submit", this.formData, () => {
        // 触发事件submit 传输formData数据
        // 回调函数 处理 数据复原
        this.isSubmiting = false;
        this.formData.nickname = "";
        this.formData.content = "";
        // 提交成功弹窗提示
        showMessage({
          content: `提交评论成功`,
          type: "success",
          duration: 2000,
        });
      });
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
// #公共样式
.data-form-container {
  margin-top: 30px;
}
.form-item {
  margin: 12px 0;
}
.error {
  color: @danger;
  font-weight: bold;
  font-size: 14px;
  letter-spacing: 2px;
  height: 20px;
}
// #input-area
.input-area {
  position: relative;
  width: 30%;
  // border: 1px solid;
  input {
    width: 100%;
    height: 20px;
    line-height: 20px;
    padding: 4px 8px;
    border: 1px dashed;
  }
}
.tip {
  font-size: 12px;
  position: absolute;
  right: -10px;
  bottom: 6px;
  color: @gray;
}

// #text-area
.text-area {
  width: 100%;
  position: relative;
  textarea {
    width: 90%;
    height: 120px;
    resize: none; // 禁止自定义输入框大小
    border: 1px dashed;
    box-sizing: border-box;
  }
  .tip {
    right: 80px;
    bottom: 10px;
  }
}

// #buttom-area
.buttom-area {
  button {
    color: #fff;
    background: @primary;
    border: none;
    border-radius: 4px;
    padding: 8px 30px;
    cursor: pointer;
    &:hover {
      background: darken(@primary, 20%);
    }
    &:disabled {
      background: lighten(@primary, 20%);
      cursor: not-allowed;
    }
  }
}
</style>
