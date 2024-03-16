import React from 'react'

//style
import backIcon from '../../assets/icons/back-icon.svg'
import LogoutIcon from '../../assets/icons/logout-icon.svg'

export default function Header({ handleLeftIcon, leftBackIcon, rightIcon, handleRightIcon }) {

  return (
    <div className='flex w-full justify-between h-[34px]'>
      <div className='cursor-pointer'>
        {leftBackIcon ? <img src={backIcon} alt='back' onClick={handleLeftIcon} />
          : <img src={LogoutIcon} alt='back' onClick={handleLeftIcon} />}
      </div>
      {rightIcon && <div className='cursor-pointer'>
        <img src={rightIcon} alt='icon' onClick={handleRightIcon} />
      </div>}
    </div>
  )
}
