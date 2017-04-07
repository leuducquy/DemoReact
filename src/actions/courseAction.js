import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
// export function createCourse(course) {
//     console.log('action');
//     return {type : types.CREATE_COURSE};
// }

export function loadCoursesSuccess(courses) {
    console.log('action');
    return {type : types.LOAD_COURSE_SUCCESS,courses : courses};
}

export function loadCourses(){
    return function (dispatch) {
        return courseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch (error => {
            throw(error);
        });
    };
}
// export function deleteCourse(course) {
//     console.log('action');
//     return {type : 'DELETE_COURSE',course};
// }