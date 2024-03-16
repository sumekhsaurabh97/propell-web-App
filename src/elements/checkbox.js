import React from 'react'
import Checkbox from "react-custom-checkbox";
import CheckboxTickIcon from '../assets/icons/tick.svg';
import colors from '../styles/colors/colors';

export default function CustomCheckbox({ checked, handleChanged, isEdit }) {
  return (
    <Checkbox
      icon={<img src={CheckboxTickIcon} alt="" />}
      size={30}
      borderColor={(checked && isEdit) ? "#ffffff" : checked ? colors.purpleOne : "#C3D0FB"}
      borderWidth={1.5}
      borderRadius={4}
      color={'#3D70B2'}
      backgroundColor={"#174A41"}
      style={{
        backgroundColor: (checked && isEdit) ? "#ffffff" : checked ? colors.purpleOne : "#EBEFFE",
        cursor: "pointer"
      }}
      checked={checked}
      onChange={handleChanged}
    />
  )
}