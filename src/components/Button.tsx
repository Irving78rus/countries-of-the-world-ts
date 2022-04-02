import React from "react";
import "../App.css";
interface ButtonType{
  children?:  any,
  onClick?() :void|undefined
  disabled?:  boolean
  }

const Button:React.FC<ButtonType>  = (  {disabled,onClick,children})  => {
//   first arg in classNames i can set class for button
 
  return (
    <button   disabled={disabled} onClick={onClick}> 
       {children}
    </button>
  );
};
 

export default Button;
