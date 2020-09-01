const ADD_VEGETABLE ="ADD_VEGETABLE";
const SET_VEGETABLE = "SET_VEGETABLE"
const initialState = {
    vegetable:[]
}
export default (state=initialState, action) =>{
 switch(action.type){
    case SET_VEGETABLE:
         return{
             ...state,
             vegetable:action.payload
         };
    case ADD_VEGETABLE:
         return{
             ...state,
             vegetable:[
                 ...state.vegetable,
                 action.payload
             ]
         }
    default:
        return state;
 }
}