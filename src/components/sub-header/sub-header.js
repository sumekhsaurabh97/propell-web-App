import React from 'react'

import { headingOne, headingTwo } from '../../styles/typography/typography'

export default function SubHeader({ title, subTitle }) {
  return (
    <div className='w-full'>
      <p className={`${headingOne} text-blackOne`}>{title}</p>
      <p className={`${headingTwo} text-grayOne mt-[8px]`}>{subTitle}</p>
    </div>
  )
}
