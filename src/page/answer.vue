<template>
    <div class="answer">
        <main-content parentComponent="answer"></main-content>
    </div>
</template>

<script>
import MainContent from "@/components/MainContent"
export default{
    name:"answer",
    data () {
        return {
            msg:"答题页面测试数据"
        }
    },
    components: { MainContent }
}

</script>

<style scoped>
    .answer{
    height:100%;
    }
    h1{
        font-size:0.3rem;
        color:#fff;
    }
</style>