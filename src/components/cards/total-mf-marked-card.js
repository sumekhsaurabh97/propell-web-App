import React from 'react'
import { useNavigate } from 'react-router-dom'

//styles
import { cardShadow } from '../../styles/global-css/global-css'
import { headingTwo, headingTwoBold, textLink } from '../../styles/typography/typography'

//components
import ButtonWithText from '../buttons/buttonWithText'

export default function TotalMutualFundMarkedCard() {
  const navigate = useNavigate()
  const handleMarkPortfolio = () => {
    navigate("/onboarding/mutual-fund")
  }
  return (
    <div className={`${cardShadow} bg-white rounded-t-[8px] py-[16px] px-[16px]`}>
      <div className='flex justify-between'>
        <p className={`${headingTwo} text-blackOne`}>Total value of marked MF (Kfin)</p>
        <p className={`${headingTwoBold} text-blackOne`}>₹ 50000</p>
      </div>
      <div className='flex justify-between mt-[8px]'>
        <p className={`${headingTwo} text-blackOne`}>Credit limit</p>
        <p className={`${headingTwoBold} text-blackOne`}>₹ 50000</p>
      </div>
      <div className='flex justify-between mt-[8px]'>
        <p className={`${textLink} text-purpleOne`}>How is my credit limit calculated?</p>
      </div>
      <div className='mt-[20px]'>
        <ButtonWithText handleClick={handleMarkPortfolio} label={"Mark my portfolio"} />
      </div>
    </div>
  )
}
