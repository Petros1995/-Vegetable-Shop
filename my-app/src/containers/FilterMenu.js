import FilterMenu from "../components/FilterMenu"
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as filterActions from '../actoins/filter';
const mapStateToProps = ({vegetable:{filterBy}}) => ({
   filterBy
  })
  const mapDispatcheToProps = dispatch => ({
    ...bindActionCreators(filterActions, dispatch)

  })
  export default connect(mapStateToProps,mapDispatcheToProps)(FilterMenu);