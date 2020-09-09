const REMOVE_VEGETABLE ="REMOVE_VEGETABLE";
const ADD_VEGETABLE = "ADD_VEGETABLE"
const initialState = {
   items:[]
}
export default (state=initialState, action) =>{
 switch(action.type){
    case ADD_VEGETABLE:
         return{
             ...state,
            items:[
                ...state.items,
                action.payload
            ],
         };
    case REMOVE_VEGETABLE:
         return{
             ...state,
             items:state.items.filter(o => o.id != action.payload)
         }
    default:
        return state;
 }
}