export function createCourse(course) {
    console.log('action');
    return {type : 'CREATE_COURSE',course};
}
export function deleteCourse(course) {
    console.log('action');
    return {type : 'DELETE_COURSE',course};
}