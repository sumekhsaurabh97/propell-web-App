import React from 'react'

//style
import { ctaPrimary } from '../../styles/typography/typography'

export default function SecondaryButton({ label, icon, handleClick }) {
  return (
    <div onClick={handleClick} className={`cursor-pointer h-[48px] bg-bgPurpleThree rounded-[150px] flex justify-center items-center w-full px-[20px]`}>
      {icon}
      <p className={`${ctaPrimary} text-purpleOne ml-[10px]`}>{label}</p>
    </div>
  )
}

