import React from 'react'

//style
import bell from '../../assets/icons/bell.svg'
import { headingTwoBold } from '../../styles/typography/typography'

export default function DashboardHeader({ handleRightIcon }) {

  return (
    <div className='flex w-full justify-between h-[34px]'>
      <div className='cursor-pointer'>
        <p className={`${headingTwoBold} text-grayOne`}>
          Welcome <span className='text-blackOne'>Rajeev</span>
        </p>
      </div>
      <div className='cursor-pointer'>
        <img src={bell} alt='icon' onClick={handleRightIcon} />
      </div>
    </div>
  )
}
