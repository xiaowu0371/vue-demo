<template>
    <div class="score">
        <div class="score-top">
            <h1>{{score}}分</h1>
            <h2>{{remarks}}</h2>
        </div>
        <p class="score-button"><button @click="show"></button></p>
        <p>{{msg}}</p>
        <img src="../assets/4-4.jpg" alt="" />
        <div v-show="isShow" class="score-mask"></div>
    </div>
</template>

<script>
export default{
    name:"score",
    data () {
        return {
            msg:"关注百知教育，获取答案",
            score:0,
            remarks:"",
            isShow:false
        }
    },
    mounted () {
        console.log(this.$store.state.answer_right)
        this.$store.state.answer_right.forEach((el,i) => {
            if(el==this.$store.state.answer_choiceArray[i]){
                this.score+=20;
            }
        });
        switch(this.score){
	  		case 0: return this.remarks=this.$store.state.answer_remarks[0];
	  		case 20: return this.remarks=this.$store.state.answer_remarks[1];
	  		case 40: return this.remarks=this.$store.state.answer_remarks[2];
            case 60: return this.remarks=this.$store.state.answer_remarks[3];
            case 80: return this.remarks=this.$store.state.answer_remarks[4]; 
            case 100: return this.remarks=this.$store.state.answer_remarks[5]; 
	  	}
    },
    methods: {
        show:function(){
            this.isShow=true;
        },
        
    },
}

</script>

<style lang="less" scoped>
    .score{
        width:100%;
        height:100%;
        background: url(../assets/4-1.jpg);
        background-size:100% 100%;
        padding-top:0.6rem;
        text-align: center;
    }
    .score-top{
        height:3.0rem;
        padding-top:2.2rem;
        text-align: center;
        background: url(../assets/4-2.png) no-repeat top center;
        background-size:5rem auto;
        color:rgb(168, 80, 8); 
        h1{
           font-size:0.8rem;
           font-weight: bolder;
        }
        h2{
            width:4rem;
            margin:0 auto;
            padding-left:0.46rem;
            text-align: left;
            font-size:0.32rem;
            color:rgb(90, 44, 6); 
            padding-top:0.2rem;
        }
    }
    .score-button{
        button{
            width:2.7rem;
            height:1.1rem;
            background: url(../assets/4-3.png) no-repeat 0.1rem center;
            background-size:cover;
        }
    }
    .score p{
        margin-top:0.4rem;
    }
    .score img{
        width:2.4rem;
        height:2.4rem;
        margin-top:0.2rem;
    }
    .score-mask{
        position: absolute;
        left:0;
        top:0;
        width:100%;
        height:100%;
        background: url(../assets/5-2.png) no-repeat center 1.8rem rgba(0, 0, 0, 0.8);
        background-size:5.4rem auto;
    }
</style>