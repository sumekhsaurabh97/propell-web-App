import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

//styles
import { pageStyle, fixedBottom } from '../../styles/layout/layout'
import { headingOne } from '../../styles/typography/typography'
import purpleTick from '../../assets/icons/purple-tick.svg'

//components
import DashboardHeader from '../../components/header/dashboard-header'
import BottomNav from '../../components/bottom-nav/bottom.nav'
import CreditAmountCard from '../../components/credit-amount-card/credit-amount-card'
import Portfolio from '../../components/portfolio/portfolio'
import Profile from '../../components/profile/profile'
import ButtonWithRightIcon from '../../components/buttons/buttonWithRightIcon'
import SuccessButton from '../../components/buttons/success-button'

export default function OnboardingDashboard() {
  const navigate = useNavigate()
  const { bottomNavChangeReducer } = useSelector(state => state)

  const handleAutoPayment = () => {
    navigate("/home")
  }

  return (
    <div className={pageStyle}>

      {bottomNavChangeReducer.tab === 'Home' &&
        <div className='w-full'>
          <DashboardHeader handleRightIcon={() => { }} />
          <CreditAmountCard title={"Credit limit unlocked!!"} amount={"₹ 500000.00"} subTitle={"Your credit limit application was accepted !"} />

          {/* e-mandate And e-sign*/}
          <div className='w-full'>
            <p className={`${headingOne} text-blackOne flex justify-center mt-[20px]`}>
              Just 2 more steps to activate your credit limit
            </p>
            <div className='mt-[20px]'>
              <SuccessButton label={"Loan Agreement Signed"} icon={<img src={purpleTick} alt='icon' />} />
            </div>
            <div className='mt-[20px]'>
              <ButtonWithRightIcon label={"Setup auto-payment"} handleClick={handleAutoPayment} />
            </div>
          </div>
        </div>
      }

      {bottomNavChangeReducer.tab === 'Portfolio' &&
        <div className='w-full flex justify-center items-center overflow-y-auto no-scrollbar'>
          <Portfolio />
        </div>
      }

      {bottomNavChangeReducer.tab === 'Profile' &&
        <Profile />
      }

      <div className={fixedBottom}>
        <BottomNav />
      </div>
    </div>
  )
}
