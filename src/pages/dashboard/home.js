import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

//styles
import { pageStyle, fixedBottom } from '../../styles/layout/layout'

//components
import DashboardHeader from '../../components/header/dashboard-header'
import BottomNav from '../../components/bottom-nav/bottom.nav'
import HomeCreditStatusCard from '../../components/cards/home-credit-status-card'
import Portfolio from '../../components/portfolio/portfolio'
import Profile from '../../components/profile/profile'
import ButtonWithText from '../../components/buttons/buttonWithText'
import { ctaPrimary } from '../../styles/typography/typography'
import SecondaryButton from '../../components/buttons/secondary-button'
import TransactionHistoryList from '../../components/transaction-list/transaction-list'

export default function Home() {
  const navigate = useNavigate()
  const { bottomNavChangeReducer } = useSelector(state => state)

  return (
    <div className={pageStyle}>

      {bottomNavChangeReducer.tab === 'Home' &&
        <div className='w-full'>
          <DashboardHeader handleRightIcon={() => { }} />
          <HomeCreditStatusCard
            title={"Credit limit available"}
            availableAmount={25000}
            date={`Valid till ${"10/12/2022"}`}
            usedCredit={25000}
            totalCreditLimit={50000}
          />
          <div className='mt-[20px]'>
            <ButtonWithText label={"Withdraw"} />
          </div>
          <div className='mt-[20px] flex justify-between items-center'>
            <p className={`${ctaPrimary} text-grayOne`}>Recent transactions-</p>
            <div className='ml-[20px]'>
              <SecondaryButton label={"View all"} />
            </div>
          </div>
          <div className='mt-[20px] pb-[100px]'>
            <TransactionHistoryList
              amount={`₹ ${"2000"}`}
              status={"Pending"}
              date={"12/12/2022"}
            />
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
