<template>
  <div></div>
</template>

<script>
import { defineComponent, getCurrentInstance } from "vue";
import { useMessage } from "naive-ui";

export default defineComponent({
  name: "MessageApi",
  setup() {
    const ctx = getCurrentInstance();
    if (ctx) {
      const message = useMessage();
      ctx.appContext.config.globalProperties.$message = message;
    }
  },
});
</script>
