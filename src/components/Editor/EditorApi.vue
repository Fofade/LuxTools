<template>
  <div id="vditor"></div>
</template>

<script>
import { defineComponent } from "vue";
import Vditor from "vditor";
import "vditor/src/assets/scss/index.scss";
export default defineComponent({
  name: "EditorApi",
  props: {},
  data() {
    return {
      contentEditor: "1",
    };
  },
  mounted() {
    this.contentEditor = new Vditor("vditor", {
      height: 600,
      toolbarConfig: {
        pin: false,
      },
      counter: {
        enable: true,
      },
      cache: {
        enable: false,
      },
      preview: {
        markdown: {
          toc: true,
          paragraphBeginningSpace: true,
          listStyle: true,
        },
        theme: {
          current: "light",
          path: {
            "ant-design": "Ant Design",
            dark: "Dark",
            light: "Light",
            wechat: "WeChat",
          },
        },
      },
      after: () => {
        this.contentEditor.setValue("");
      },
    });
  },
});
</script>
