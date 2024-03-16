import React from 'react';
import { RadioGroup, Radio } from 'react-radio-input';
import { headingTwoBold } from '../styles/typography/typography';


export default function RadioInput({ setSelectedValue, selectedValue, options, valueType }) {

  return (
    <RadioGroup
      name={valueType}
      onChange={setSelectedValue}
      selectedValue={selectedValue}
    >
      <div className='flex w-full justify-between'>
        {options?.map((value) => {
          return (<label htmlFor={value.name} key={value.name} className='flex justify-between border-[1px] px-[16px] py-[12px] rounded-[5px]'>
            <Radio id={value.name} value={value.name} />
            <div className='ml-[20px] flex items-center'>
              <div>{value.icon}</div>
              <p className={`${headingTwoBold} ml-[8px] text-grayOne`}>{value.name}</p>
            </div>
          </label>)
        })}
      </div>
    </RadioGroup>
  )
}
