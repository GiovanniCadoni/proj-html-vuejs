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
    padding: 120px 0;
    width: 80%;
    margin: auto;
}
</style>