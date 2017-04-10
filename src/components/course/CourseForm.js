import React , {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CourseForm  = ({course ,allAuthors, onSave ,onChange,loading,errors}) => {
  return (
    <form action="">
      <TextInput
      name  = " title"
       label  = " title"
      value = {course.title}
      onChange = {onChange}
      error = {errors.title}/>

      <SelectInput 
      name = "autthorId"
      label = "Author"
      value = {course.authorId}
      defaultOption = "Select Author"
      options = {allAuthors}
      onChange = {onChange}
      error = {errors.authorId}
      />
       <TextInput
      name  = "category"
      label = "category"
      value = {course.category}
      onChange = {onChange}
      error = {errors.title}/>
       <TextInput
      name  = " length"
      label = "Length"
      value = {course.length}
      onChange = {onChange}
      error = {errors.length}/>
      <input 
      type = "submit"
      disabled = {loading}
      value = {loading ? 'saving..': 'Save'}
      className = "btn btn-primary"
      onClick = {onSave} />
      


    </form>
  );
};
CourseForm.propTypes = {
    courses : PropTypes.object.isRequired,
    allAuthors : PropTypes.array.isRequired,
    onSave : PropTypes.func.isRequired,
    onChange : PropTypes.func.isRequired,
    loading  : PropTypes.bool,
    errors : PropTypes.object
};
export default CourseForm;
 