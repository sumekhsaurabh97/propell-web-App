import React from 'react'

//components
import Header from '../../components/header/header'
import SubHeader from '../../components/sub-header/sub-header'
import MutualFundList from '../../components/mutual-fund-list/mutual-fund-list'
import TotalMutualFundMarkedCard from '../../components/cards/total-mf-marked-card'

//styles
import { pageStyle, fixedBottom } from '../../styles/layout/layout'
import InfoIcon from '../../assets/icons/info-icon.svg'
import { useNavigate } from 'react-router-dom'
import { textLink } from '../../styles/typography/typography'

export default function CamsPortfolioMark() {
  const navigate = useNavigate()
  const handleBack = () => {
    navigate('/onboarding/cams')
  }

  const handleInfo = () => {
    alert("info")
  }

  const mutualFunds = [
    {
      id: 1,
      name: "SBI Mutual fund",
      price: "₹ 200"
    },
    {
      id: 2,
      name: "SBI Mutual fund",
      price: "₹ 200"
    },
    {
      id: 3,
      name: "SBI Mutual fund",
      price: "₹ 200"
    },
    {
      id: 4,
      name: "SBI Mutual fund",
      price: "₹ 200"
    },
    {
      id: 5,
      name: "SBI Mutual fund",
      price: "₹ 200"
    },
    {
      id: 6,
      name: "SBI Mutual fund",
      price: "₹ 200"
    },
    {
      id: 7,
      name: "SBI Mutual fund",
      price: "₹ 200"
    },
  ]

  return (
    <div className={`${pageStyle}`}>
      <div className='fixed bg-white w-full'>
        <div className='w-full px-[16px]'>
          <Header
            handleLeftIcon={handleBack}
            rightIcon={InfoIcon}
            handleRightIcon={handleInfo}
            leftBackIcon />
        </div>
        <div className='w-full px-[16px]'>
          <SubHeader
            title={"Mark your MF as collateral"}
            subTitle={"Please mark the Mutual Funds you want as collateral to avail a credit limit"}
          />
        </div>
        <div className='mt-[20px] bg-white'>
          <div className='absolute w-full flex justify-between items-center bg-bgOne px-[10%]  h-[31px]'>
            <p className={`${textLink} text-grayOne`}>Fund name</p>
            <p className={`${textLink} text-grayOne`}>Marked value</p>
          </div>
        </div>

      </div>
      <div className='w-full pt-[150px] pb-[200px] overflow-y-auto no-scrollbar'>
        <MutualFundList mutualFunds={mutualFunds} />
      </div>
      <div className={`${fixedBottom}`}>
        <TotalMutualFundMarkedCard />
      </div>
    </div>
  )
}
