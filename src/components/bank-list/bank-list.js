import React from 'react'
import { RadioGroup, Radio } from 'react-radio-input';

import { textLink, captionTwo } from '../../styles/typography/typography';

export default function BankList({ setSelectedValue, selectedValue, options, valueType }) {
  return (
    <RadioGroup
      name={valueType}
      onChange={setSelectedValue}
      selectedValue={selectedValue}
    >
      <div className='w-full'>
        {options?.map((value, index) => {
          return (
            <label key={index} htmlFor={value.name} className={selectedValue === value.name ? 'bg-bgOne flex justify-between px-[16px] py-[12px] mt-[10px] rounded-[5px]' : 'flex justify-between px-[16px] py-[12px] mt-[10px]'}>
              <div className='flex justify-center items-center'>
                <Radio id={value.name} value={value.name} />
                <div className='flex flex-col ml-[10px]'>
                  <p className={`${textLink} ml-[8px] text-blackOne`}>{value.name}</p>
                  <p className={`${captionTwo} ml-[8px] text-grayOne`}><span>Acc. No. </span>{value.account_no}</p>
                  <p className={`${captionTwo} ml-[8px] text-grayOne`}><span>IFSE </span>{value.ifsc}</p>
                </div>
              </div>
              <div className='ml-[20px] flex items-center'>
                {value.icon}
              </div>
            </label>
          )
        })}
      </div>
    </RadioGroup>
  )
}
