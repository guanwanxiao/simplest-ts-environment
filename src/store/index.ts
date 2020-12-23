import Vue from 'vue'
import Vuex from 'vuex'
import { IconType } from '../components/toolbar/config'
import { Shape } from '../components/rightbar/config'
Vue.use(Vuex)
// 在外面定义好类型
let operate!:IconType
let shape !:Shape
export default new Vuex.Store({
  state:{
    operate,
    lineWidth:1,
    bgColor:'#fff',
    isCusor:false,
    keybord:'',
    isInput:true,
    shape
  },
  mutations:{
    setOperate(state,type:IconType) {
      state.operate = type
    },
    setLineWidth(state,width:number) {
      state.lineWidth = width
    },
    setBgColor(state,color:string){
      state.bgColor = color
    },
    setCursor(state,val) {
      state.isCusor = val
    },
    setKeybord(state,val) {
      state.keybord += val
    },
    // 输入状态下不显示 cursor
    setInputStatus(state,val){
      state.isInput = val
    },
    deleteOne(state) {
      state.keybord = state.keybord.slice(0,-1)
    },
    clearKey(state) {
      state.keybord = ''
    },
    setShape(state,shape:Shape) {
      state.shape = shape
    }
  },
  getters:{
    isInput(state) {
      return state.isCusor
    }
  }
})