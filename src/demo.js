import React from 'react';
 const HelloWorld = (props) => {
   const sayHi = (event) => {
     alert('Hi ${props.name}');
   };

   return (
    <div>
       <a href ="#"
          onClick = {sayHi}>Say hi
          </a>
    </div>
   );
 };

 HelloWorld.propTypes = {
   name : React.PropTypes.string.isRequired
 };
 export default HelloWorld;