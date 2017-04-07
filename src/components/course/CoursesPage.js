import React , {PropTypes}from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseAction';
class CoursesPage  extends React.Component {

    constructor(props,context){
        super(props,context);

        this.state = {
            course : {title : "aa"}
        };
       
    }
  
    courseRow(course,index){
        
        return <div key = {index}>{course.title} </div>;
    }
    render(){
        return (
            <div>
               <h1> Courses</h1>
               {this.props.courses.map(this.courseRow)}
              
            </div>
        );
    }
}
CoursesPage.propTypes = {
    courses : PropTypes.array.isRequired,
    actions : PropTypes.object.isRequired
};
function mapStatetoProps(state,ownerProps){
    console.log('mapStatetoProps');
   
  
    return {
        courses : state.course
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
export default connect(mapStatetoProps,mapDispatchToProps)(CoursesPage);