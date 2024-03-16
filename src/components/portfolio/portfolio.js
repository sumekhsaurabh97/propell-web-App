import React from 'react'

import coomingSoon from '../../assets/img/coming-soon.svg'
import { headingOne, headingTwo } from '../../styles/typography/typography'

export default function Portfolio() {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <img src={coomingSoon} alt="img" width={'50%'} />
      <p className={`${headingOne} text-blackOne mt-[14px]`}>Under Construction</p>
      <p className={`${headingTwo} text-grayOne mt-[10px]`}>This feature is under construction, and will be releasing soon</p>
    </div>
  )
}
