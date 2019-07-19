import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store =new Vuex.Store({
    state:{
        msg:"store测试数据",
        answer_right:[],
        answer_choiceArray:[],
        answer_remarks:[],
    },
    mutations:{

    }
})

export default store;