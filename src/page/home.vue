<template>
    <div class="home">
        <main-content parentComponent="home"></main-content>
    </div>
</template>

<script>
    import MainContent from "@/components/MainContent"
    export default {
        name: "home",
        data() {
            return {
                msg: "首页测试数据"
            }
        },
        components: { MainContent }
    }

</script>

<style scoped>
.home{
    height:100%;
}
</style>