import React from 'react'

import { inputBoxHeading, headingTwo } from '../styles/typography/typography'

export default function Prompt({ title, content }) {
  return (
    <div className='bg-bgOne w-full border-[2px] rounded-[5px] p-[12px]'>
      <p className={`${inputBoxHeading} text-blackTwo`}>{title}</p>
      <p className={`${headingTwo} text-grayOne mt-[10px]`}>{content}</p>
    </div>
  )
}
