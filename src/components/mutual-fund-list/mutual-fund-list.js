import React, { useState } from 'react'

//components
import CustomCheckbox from '../../elements/checkbox'

//styles
import editIcon from '../../assets/icons/edit.svg'
import { captionOne, headingTwo } from '../../styles/typography/typography'

export default function MutualFundList({ mutualFunds }) {
  const handleCheckbox = (checked) => {
    console.log(checked)
  }

  return (
    <div className=''>
      {mutualFunds && mutualFunds.map((mutualFund) => {
        return (
          <div key={mutualFund.id} className={`flex items-center justify-between border-[1px] rounded-[8px] p-[16px] border-purpleOne shadow-inner bg-white mb-[12px]`}>
            <div className='flex justify-center items-center'>
              <div className={`cursor-pointer `}>
                <CustomCheckbox
                  checked={true}
                  handleChanged={handleCheckbox}
                  isEdit={false} />
              </div>
              <p className={`${captionOne} ml-[16px]`}>{mutualFund.name}</p>
            </div>
            <div className='flex justify-center items-center'>
              <p className={`${headingTwo} ml-[16px] text-purpleOne`}>{mutualFund.price}</p>
              <div className={`cursor-pointer ml-[16px]`}>
                <img src={editIcon} alt='' />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
