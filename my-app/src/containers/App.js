import App from "../components/App"
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as VegetablesAction from '../actoins/VegetablesAction';
import * as filterActions from '../actoins/filter';



const mapStateToProps = ({vegetable,arr1}) => ({
  arr1:vegetable.vegetable,
    vegetable:vegetable.vegetable,
    isReady:vegetable.isReady
  })
  const mapDispatcheToProps = dispatch => ({
    ...bindActionCreators(VegetablesAction, dispatch),
    ...bindActionCreators(filterActions, dispatch)
  })
  export default connect(mapStateToProps,mapDispatcheToProps)(App);