import React from 'react'
import { cardShadow } from '../../styles/global-css/global-css'
import { captionOne, headingOne, headingTwo } from '../../styles/typography/typography'

export default function CreditAmountCard({ title, amount, subTitle }) {
  return (
    <div className={`rounded-[15px] w-full flex justify-center items-center flex-col`}>
      <div className='bg-bgTwo w-full py-[16px] rounded-t-[15px] flex justify-center flex-col items-center'>
        <p className={`${captionOne} text-purpleOne`}>{title}</p>
        <p className={`${headingOne} text-purpleOne mt-[4px]`}>{amount}</p>
      </div>
      <div className={`${cardShadow} rounded-b-[15px] bg-white w-full py-[16px] radius-[15px] flex justify-center flex-col items-center`}>
        <p className={`${headingTwo} text-grayOne`}>{subTitle}</p>
      </div>
    </div>
  )
}
