import React , {PropTypes} from 'react';

const SelectInput = ({name,label ,onChange, defaultOption, value,error,options}) => {


return (
  <div className = "form-group">
    <label htmlFor = {this.props.name} > {label} </label>
    <div className = "field" >
      <select 
      name = {this.props.name}
      value = {this.props.value}
      className = "form-control" >
      <option value = "" > {this.props.defaultOption} </option>
      {options.map ((option) => {
        return <option key ={option.value} value =  {option.value} > {option.text} </option>;
      })

      }  
    </select>
    {error && <div className = "alert alert-danger"> {this.props.error}</div>}
  </div>
  </div>
);
};
SelectInput.propTypes = {
  name : PropTypes.string.isRequired,
  label :PropTypes.string.isRequired,
  onChange : PropTypes.func.isRequired,
  defaultOption : PropTypes.func.isRequired,
  value : PropTypes.string,
  error : PropTypes.string,
  options : PropTypes.arrayOf(PropTypes.object)

}
export default SelectInput;