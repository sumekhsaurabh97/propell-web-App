import React from 'react'

//style
import { ctaPrimary } from '../../styles/typography/typography'

export default function SuccessButton({ label, icon }) {
  return (
    <div className={`cursor-pointer h-[48px] bg-white rounded-[150px] flex justify-start items-center w-full px-[20px] border-[1px]`}>
      {icon}
      <p className={`${ctaPrimary} text-grayOne ml-[15px]`}>{label}</p>
    </div>
  )
}