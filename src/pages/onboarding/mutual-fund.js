import React from 'react'
import { useNavigate } from 'react-router-dom'

//styles
import { fixedBottomWithPadding, pageStyle } from '../../styles/layout/layout'
import InfoIcon from '../../assets/icons/info-icon.svg'

//components
import Header from '../../components/header/header'
import SubHeader from '../../components/sub-header/sub-header'
import ButtonWithText from '../../components/buttons/buttonWithText'
import ButtonWithRightIcon from '../../components/buttons/buttonWithRightIcon'


export default function MutualFund() {
  const navigate = useNavigate()
  const handleBack = () => {
    navigate('/onboarding')
  }

  const handleInfo = () => {
    alert("info")
  }

  const handleKfin = () => {
    navigate('/onboarding/kfin')
  }

  const handleCams = () => {
    navigate('/onboarding/cams')
  }

  const handleKyc = () => {
    navigate('/onboarding/kyc-form')
  }

  return (
    <div className={pageStyle}>
      <div className='w-full'>
        <Header
          handleLeftIcon={handleBack}
          rightIcon={InfoIcon} handleRightIcon={handleInfo}
          leftBackIcon />
      </div>
      <div className='w-full'>
        <SubHeader
          title={"Unlock your credit limit"}
          subTitle={"Select at least one of the RTA below to fetch your MF & mark them as collateral to proceed."}
        />
      </div>
      <div className='w-full mt-[28px]'>
        <ButtonWithRightIcon label={"Fetch my Kfin portflio"} handleClick={handleKfin} />
      </div>
      <div className='w-full mt-[16px]'>
        <ButtonWithRightIcon label={"Fetch my CAMS portflio"} handleClick={handleCams} />
      </div>
      <div className={fixedBottomWithPadding}>
        <ButtonWithText label={"Continue"} handleClick={handleKyc} />
      </div>
    </div>
  )
}
