<template>
  <n-message-provider>
    <MessageApi />
  </n-message-provider>
  <router-view />
</template>
<script>
import MessageApi from "@/components/MessageApi/MessageApi.vue";
import { NMessageProvider } from "naive-ui";

export default {
  components: {
    MessageApi,
    NMessageProvider,
  },
  name: "App",
};
</script>
<style lang="scss">
@import "@/assets/styles/MyFont.css";
#app {
  font-family: "tt";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
