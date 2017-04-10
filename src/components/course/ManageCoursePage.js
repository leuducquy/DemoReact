import React , {PropTypes} from 'react';
import {connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseAction';
import CourseForm from './CourseForm';

class ManageCoursePage extends React.Component {
  constructor (props, context) {
  super(props,context);
    this.state = {
      course : Object.assign({}, this.props.course),
      errors  : {}

    }
  }

  render () {
     return (
       <div>
      <h1>
       Manage Course
       <CourseForm course = {this.state.course}
        allAuthors = {[]}
        errors = {this.state.errors}
       />

      </h1>
      </div>
      );
  };
}
ManageCoursePage.propTypes = {
  course : PropTypes.object.isRequired
};

function mapStatetoProps(state,ownerProps){
    console.log('mapStatetoProps');
   let course = {id: '', watchHrefs : '' , title : '',authorId : '',length : '',category : ''};
  
    return {
        course : course
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