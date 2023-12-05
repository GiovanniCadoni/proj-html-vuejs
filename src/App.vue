<script>
import AppHeader from "./components/AppHeader.vue";
import AppDownload from "./components/AppDownload.vue";
import AppMain from "./components/AppMain.vue";

export default {
  data() {
    return {

    };
  },
  components: { AppHeader, AppDownload, AppMain },
};
</script>

<template>

<AppHeader />
<AppDownload />
<AppMain />

</template>

<style lang="scss">
@use "./style/general.scss";
@import "@fortawesome/fontawesome-free/css/all.css";
</style>
