import React from 'react'
import { ctaPrimary } from '../../styles/typography/typography'

export default function ButtonWithText({ handleClick, label, disabled }) {
  return (
    <>
      {disabled ?
        <div className='bg-bgOne cursor-not-allowed h-[48px] rounded-[150px] flex items-center justify-center'>
          <p className={`${ctaPrimary} text-grayOne text-center`}>{label}</p>
        </div>
        : <div onClick={handleClick} className='bg-purpleOne hover:bg-bgPurpleTwo cursor-pointer h-[48px] rounded-[150px] flex items-center justify-center'>
          <p className={`${ctaPrimary} text-white text-center`}>{label}</p>
        </div>
      }
    </>
  )
}
