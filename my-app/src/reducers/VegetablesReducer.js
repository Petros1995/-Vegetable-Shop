const SET_IS_READY ="SET_IS_READY";
const SET_VEGETABLE = "SET_VEGETABLE"
const SET_FILTER_FRUIT = "SET_FILTER_FRUIT"
const SET_FILTER_VEGETABLE = "SET_FILTER_VEGETABLE"
const initialState = {
    isReady:false,
    vegetable:null,
    arr1:[],
    filterBy:"all"
}
export default (state=initialState, action) =>{
 switch(action.type){
    case SET_VEGETABLE:
         return{
             ...state,
             arr1:action.payload,
             vegetable:action.payload,
             isReady:true
             
         };
         debugger
    case SET_IS_READY:
         return{
             ...state,
             isReady:action.payload
         };
         case SET_FILTER_FRUIT:
            return{
                ...state,
                vegetable:state.vegetable.filter(v=>v.type === "vegetable"),
                filterBy:action.payload
            }
            case SET_FILTER_VEGETABLE:
                return{
                    ...state,
                    arr1:state.arr1.filter(v=>v.type === "fruit"),
                    filterBy:action.payload
                }
    default:
        return state;
 }
}