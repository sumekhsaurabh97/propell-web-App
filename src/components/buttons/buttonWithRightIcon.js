import React from 'react'

//styles
import { ctaPrimary } from '../../styles/typography/typography'
import nextArrow from '../../assets/icons/next-arrow.svg'

export default function ButtonWithRightIcon({ label, handleClick }) {
  return (
    <div onClick={handleClick} className={`cursor-pointer h-[56px] bg-bgPurpleThree rounded-[150px] flex justify-between items-center w-full px-[20px]`}>
      <p className={`${ctaPrimary} text-purpleOne`}>{label}</p>
      <div className='w-[30px] h-[30px] rounded-[15px] bg-white flex justify-center items-center'>
        <img src={nextArrow} alt='next' />
      </div>
    </div>
  )
}
