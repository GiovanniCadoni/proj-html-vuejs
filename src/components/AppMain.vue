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
    
    <div class="container">
        <AppWorkCulture />
        <AppSkills />
        <AppCourses />
    </div>

</template>

<style scoped lang="scss">
.container{
    padding-top: 120px;
    padding-bottom: 80px;
    width: 80%;
    margin: auto;
}
</style>