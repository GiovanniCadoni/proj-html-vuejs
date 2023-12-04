<script>
import AppHeader from "./components/AppHeader.vue";
import AppDownload from "./components/AppDownload.vue";

export default {
  data() {
    return {

    };
  },
  components: { AppHeader, AppDownload },
};
</script>

<template>

<AppHeader />
<AppDownload />

</template>

<style lang="scss">
@use "./style/general.scss";
@import "@fortawesome/fontawesome-free/css/all.css";
</style>
