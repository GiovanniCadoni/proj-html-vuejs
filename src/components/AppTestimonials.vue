<script>
import AppTestimonialsLeft from "./AppTestimonialsLeft.vue";
import AppTestimonialsRight from "./AppTestimonialsRight.vue";

export default {
    data() {
        return {

        };
    },
    components: { AppTestimonialsLeft, AppTestimonialsRight },
};
</script>

<template>
<div class="container">
    <AppTestimonialsLeft />
    <AppTestimonialsRight />
</div>
</template>

<style scoped lang="scss">
.container{
    padding-top: 160px;
    padding-bottom: 80px;
    width: 80%;
    margin: auto;
}
</style>