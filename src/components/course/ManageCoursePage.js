import React , {PropTypes} from 'react';
import {connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseAction';
class ManageCoursePage extends React.Component {
  constructor (props, context) {
  super(props,context);

  }

  render () {
     return (
      <h1>
       Manage Course
      </h1>
      );
  };
}
ManageCoursePage.propTypes = {

};

function mapStatetoProps(state,ownerProps){
    console.log('mapStatetoProps');
   
  
    return {
        state : state
    };
}
function mapDispatchToProps(dispatch) {
    console.log('mapDispatchToProps');
    
    return {
        // arrow func
        actions : bindActionCreators(courseActions,dispatch)
        // course => dispatch(courseActions.createCourse(course))
    };
}
export default connect(mapStatetoProps,mapDispatchToProps)(ManageCoursePage);