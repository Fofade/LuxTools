<template>
  <n-card title="数据格式化">
    <n-input
      v-model:value="textValue"
      type="textarea"
      placeholder="自动调整尺寸"
      :autosize="{
        minRows: 3,
      }"
    />
    <n-card title="操作">
      <n-button type="primary" @click="SqlFormat"> 转为sql值 </n-button>
    </n-card>
  </n-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { NButton, NInput, NCard } from "naive-ui";
import {
  MsgErrorHandler,
  MsgSuccessHandler,
} from "@/components/MessageApi/Message";

export default defineComponent({
  name: "ValueFormat",
  data() {
    return {
      textValue: "",
    };
  },
  components: {
    NButton,
    NInput,
    NCard,
  },
  methods: {
    SqlFormat() {
      let str_new: Array<string> = [];
      if (this.textValue.length < 1) {
        MsgErrorHandler("请输入数据后再转换！");
      } else {
        debugger;
        let str = this.textValue
          .replaceAll("'", " ")
          .replaceAll(",", " ")
          .replaceAll("\r\n", "")
          .replaceAll("\n", " ")
          .replaceAll("  ", " ")
          .split(" ");
        str.forEach((s) => {
          if (s.length > 0) str_new.push("'" + s + "'");
        });
        this.textValue = str_new.join(", ");
        MsgSuccessHandler("转换成功！");
      }
    },
  },
});
</script>
