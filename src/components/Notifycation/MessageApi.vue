<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useMessage } from "naive-ui";

export default defineComponent({
  name: "MessageApi",
  setup() {
    window.$message = useMessage();
  },
});
</script>
