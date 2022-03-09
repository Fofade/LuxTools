<template>
  <div class="home">LCS 页面解析器</div>
</template>

<script lang="ts">
import { LuxToolsDB } from "@/obj/model/db/LuxToolsDB";
import { GetDbConnect } from "@/obj/opt/db/LuxToolsDbOpt";
import { defineComponent } from "vue";

export default defineComponent({
  name: "LcsParser",
  components: {},
  methods: {
    get(): LuxToolsDB {
      return GetDbConnect();
    },
  },
});
</script>
