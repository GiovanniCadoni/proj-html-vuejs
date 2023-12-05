<script>
import AppHeader from "./components/AppHeader.vue";
import AppDownload from "./components/AppDownload.vue";
import AppMain from "./components/AppMain.vue";
import AppTestimonials from "./components/AppTestimonials.vue";
import AppBlogs from "./components/AppBlogs.vue";
import AppNewsletters from "./components/AppNewsletters.vue";

export default {
  data() {
    return {

    };
  },
  components: { AppHeader, AppDownload, AppMain, AppTestimonials, AppBlogs, AppNewsletters },
};
</script>

<template>

<AppHeader />
<AppDownload />
<AppMain />
<AppTestimonials />
<AppBlogs />
<AppNewsletters />

</template>

<style lang="scss">
@use "./style/general.scss";
@import "@fortawesome/fontawesome-free/css/all.css";
</style>
