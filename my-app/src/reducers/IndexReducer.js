import {combineReducers} from 'redux';
import vegetable from './VegetablesReducer';
import cart from './CartReducer';
export default    combineReducers ({
    vegetable ,
    cart
 })
 