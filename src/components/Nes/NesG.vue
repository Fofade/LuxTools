<template>
  <canvas id="nes-canvas" width="600" height="400" style="width: 100%"></canvas>
</template>

<script>
import { defineComponent } from "vue";
import { nes_load_url, nes_load_data } from "./Nes";
export default defineComponent({
  name: "NesG",
  props: {
    romPath: String,
    romData: String,
  },
  data() {
    return {};
  },
  mounted() {
    this.LoadRom();
  },
  methods: {
    LoadRom() {
      if (this.romPath && this.romPath != "")
        nes_load_url("nes-canvas", this.romPath);
      else if (this.romData && this.romData != "")
        nes_load_data("nes-canvas", this.romData);
    },
  },
});
</script>
