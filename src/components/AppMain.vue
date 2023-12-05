<script>
import AppWorkCulture from "./AppWorkCulture.vue";
import AppSkills from "./AppSkills.vue";

export default {
    data() {
        return {

        };
    },
    components: { AppWorkCulture,AppSkills },
};
</script>

<template>
    
    <div class="container">
        <AppWorkCulture />
        <AppSkills />
    </div>

</template>

<style scoped lang="scss">
.container{
    padding: 120px 0;
    width: 80%;
    margin: auto;
}
</style>