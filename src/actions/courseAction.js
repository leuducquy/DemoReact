import * as types from './actionTypes';

export function createCourse(course) {
    console.log('action');
    return {type : types.CREATE_COURSE};
}
// export function deleteCourse(course) {
//     console.log('action');
//     return {type : 'DELETE_COURSE',course};
// }