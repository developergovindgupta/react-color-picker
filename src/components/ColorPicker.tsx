import React from 'react';
import './ColorPicker.css'
type btnPropsType = {
  color?: string,
  gradient?:string
  
};
export const ColorPickerButton = (props:btnPropsType) => { 
  return <div className='color-picker-btn' style={{backgroundColor:props.color}}></div>;
};


const ColorPicker = () => {
  return (
    <div className='react-color-picker'>
      <ColorPickerButton color="red" />
    </div>
  )
}

export default ColorPicker