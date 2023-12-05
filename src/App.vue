<script>
import AppHeader from "./components/AppHeader.vue";
import AppDownload from "./components/AppDownload.vue";
import AppMain from "./components/AppMain.vue";
import AppTestimonials from "./components/AppTestimonials.vue";

export default {
  data() {
    return {

    };
  },
  components: { AppHeader, AppDownload, AppMain, AppTestimonials },
};
</script>

<template>

<AppHeader />
<AppDownload />
<AppMain />
<AppTestimonials />

</template>

<style lang="scss">
@use "./style/general.scss";
@import "@fortawesome/fontawesome-free/css/all.css";
</style>
