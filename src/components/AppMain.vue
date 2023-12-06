<script>
import AppWorkCulture from "./AppWorkCulture.vue";
import AppSkills from "./AppSkills.vue";
import AppCourses from "./AppCourses.vue";

export default {
    data() {
        return {

        };
    },
    components: { AppWorkCulture, AppSkills, AppCourses },
};
</script>

<template>
    <div class="background">
        <div class="container">
            <AppWorkCulture />
            <AppSkills />
            <AppCourses />
        </div>
    </div>

</template>

<style scoped lang="scss">
.background{
    background-color: #ededed;
}
.container{
    padding-top: 160px;
    padding-bottom: 20px;
    width: 80%;
    margin: auto;
}
</style>