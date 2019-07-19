<template>
    <div class="main">
        <template v-if="parentComponent=='home'">
            <p class="main-top" >{{answer_weeks}}</p>
            <div class="main-content">
                <img src="../assets/1-2.png" alt="" />
                <button class="main-button button-home" @click="stare_answer"></button>
            </div>
        </template>
        <template v-if="parentComponent=='answer'">
            <p class="main-top" >题目{{answer_item_id+1}}</p>
            <div class="main-content main-items">
                <h1>{{ answer_title }}</h1>
                <ul>
                   <li v-for="(item,index) in answer_item_option" :key="index"  @click="answer_choice(index,item.answer_key)">
                       <span class="answer-item-id" :class="{ 'active':isActive===index }">{{item.answer_optionId}}</span>
                       <span>{{item.answer_optionContent }}</span>
                   </li>
                </ul>
                <p>
                    <button v-if="!answer_isSubmit" class="button-answer-next" @click="nextItems"></button>
                    <button v-else class="button-answer-submit" @click="answer_submit"></button>
                </p>
            </div>
        </template>



    </div>
</template>

<script>
    import {mapState} from "vuex"
    export default {
        name: "MainContent",
        props: ["parentComponent"],
        data() {
            return {
                msg: "主页面测试数据",
                isActive:false,
                answer_data:[],
                answer_weeks: "第一周",
                answer_item_id: 0,
                answer_item_option:[],
                answer_isSubmit:false,
                answer_right:[],
                answer_choiceKey:null,
                answer_title:"",
            }
        },
        mounted () {
            this.initializeData();
        },
        computed: {
            ...mapState([])
        },
        methods: {
            initializeData:function(){
                this.$axios.get("https://www.easy-mock.com/mock/5b4972414ddc075ff3d24f53/example/answer")
                        .then(res=>{
                            //console.log(res.data)
                            this.answer_data=res.data.data.answer_menu;
                            this.answer_item_option=res.data.data.answer_menu[this.answer_item_id].answer_option;
                            this.answer_title=res.data.data.answer_menu[this.answer_item_id].answer_title;
                            this.$store.state.answer_right=res.data.data.answer_array;
                            this.$store.state.answer_remarks=res.data.data.answer_remarks;

                        },res=>{
                        })
            },
            stare_answer:function(){
                this.$router.push("/answer");
            },
            nextItems:function(){
                    if(this.answer_choiceKey===null){
                        alert("您还没有选择，不能进行下一题；")
                    }else{
                        this.isActive=false;
                        this.$store.state.answer_choiceArray.push(this.answer_choiceKey);
                        this.answer_choiceKey=null;

                        if(this.answer_item_id==(this.answer_data.length-2)){                          
                            this.answer_isSubmit=true                  
                        }
                        this.answer_item_id+=1;   
                        this.answer_title=this.answer_data[this.answer_item_id].answer_title;
                        this.answer_item_option=this.answer_data[this.answer_item_id].answer_option;
                    }
                    
            },
            answer_choice:function(val,key){
                this.isActive=val;
                this.answer_choiceKey=key;  
            },
            answer_choiceAdd:function(){

            }
            ,
            answer_submit:function(){
                if(this.answer_choiceKey===null){
                        alert("选好答案，在开始下一题吧！")
                }else{
                    this.$store.state.answer_choiceArray.push(this.answer_choiceKey);
                    this.answer_choiceKey=null;
                this.$router.push("/score")
                }
            }
        },
    }


</script>


<style lang="less">
    .main {
        width:100%;
        height:100%;
        background: url(../assets/1-1.jpg);
        background-size:100% 100%;
        position: relative;
        padding-top:18%;
        box-sizing: border-box;
    }

    .main-top {
        position: absolute;
        right: 0.9rem;
        top: -6%;
        width: 1.48rem;
        height: 2.96rem;
        background: url(../assets/WechatIMG2.png) no-repeat center;
        background-size: cover;
        font-weight: bold;
        color: rgb(190, 117, 7);
        font-size: 0.26rem;
        padding: 2.2rem 0 0 0.38rem;
        box-sizing: border-box;
    }
    .main-content{
        width:100%;
        text-align: center;
        img{
            display:block;
            width:6rem;
            height:auto;
            margin:0 auto;
        }
        button{
            width:1.74rem;
            height:0.84rem;
            margin:0 auto;
            margin-top:0.4rem;
            background-size:cover;
        }
    }
    .button-home{
        background: url(../assets/1-4.png) no-repeat center;        
    }
    .main-items{
        background: url(../assets/2-1.png) no-repeat top center;
        background-size:6.0rem auto;
        padding-top:1rem;
        color:#fff;
        text-align: left;
        box-sizing: border-box;
        h1{
            font-size:0.3rem;
            padding:0 0 0.3rem 1.8rem;
        }
        ul{
            padding:0 0 0.8rem 2.0rem;
            li{
                font-size:0.24rem;
                line-height: 1.5em;
                padding-bottom:0.1rem;
                span.answer-item-id{
                    display: inline-block;
                    font-weight: bold;
                    width:0.4rem;
                    height:0.4rem;
                    text-align: center;
                    line-height: 0.4rem;
                    border-radius: 50%;
                   border:1px solid rgb(190, 117, 7);
                }
            }
        }
        p{
            text-align: center;
        }
    }
    .active{
        background: rgb(190, 117, 7);
    }
    .button-answer-next{
        background: url(../assets/2-2.png) no-repeat center;
    }
    .button-answer-submit{
        background: url(../assets/3-1.png) no-repeat center; 
    }
</style>