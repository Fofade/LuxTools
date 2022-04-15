<template>
  <p style="font-size: 36px">Nes</p>
  <div class="nes">
    <nes-g :romData="romData"></nes-g>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import NesG from "@/components/Nes/NesG.vue";

export default defineComponent({
  name: "NesGamer",
  data() {
    return {
      romPath: "",
      romData: "",
    };
  },
  components: {
    NesG,
  },
  mounted() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    // const fs = require("fs");
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    // const path = require("path");
    // let filePath = path.resolve("/src/assets/nes/demo.nes");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // fs.readFile(filePath, (err: any, buffer: any) => {
    //   if (!err) {
    //     this.romData = buffer;
    //   }
    // });
  },
  methods: {},
});
</script>
<style scoped>
.nes {
  position: relative;
  margin-left: 30%;
}
</style>
