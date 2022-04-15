<template>
  <n-result
    status="404"
    title="404 资源不存在"
    description="生活总归带点荒谬"
    size="huge"
  >
    <template #footer>
      <n-button>找点乐子吧</n-button>
    </template>
  </n-result>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { NResult, NButton } from "naive-ui";

export default defineComponent({
  name: "404PageNotFound",
  components: {
    NResult,
    NButton,
  },
});
</script>
