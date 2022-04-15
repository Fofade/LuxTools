<template>
  <div class="editor-title">
    <n-gradient-text type="info"> 文本编辑器 </n-gradient-text>
  </div>
  <div class="editor">
    <editor-api></editor-api>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import EditorApi from "@/components/Editor/EditorApi.vue";
import { NGradientText } from "naive-ui";

export default defineComponent({
  name: "LuxEditor",
  data() {
    return {};
  },
  components: {
    EditorApi,
    NGradientText,
  },
  methods: {},
});
</script>
<style scoped>
.editor {
  position: relative;
  margin-left: 5%;
  margin-top: 1%;
  margin-right: 5%;
  margin-bottom: 2%;
}

.editor-title {
  position: relative;
  margin-top: 2%;
  font-weight: 1000 !important;
  font-size: 50px !important;
}
</style>
