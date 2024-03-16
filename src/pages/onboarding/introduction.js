import React from 'react'
import { useNavigate } from 'react-router-dom'

// component
import Header from '../../components/header/header'
import SubHeader from '../../components/sub-header/sub-header'
import ButtonWithText from '../../components/buttons/buttonWithText'

//styles
import { pageStyle, fixedBottomWithPadding } from '../../styles/layout/layout'
import { inputBoxHeading, inputBoxEmpty } from '../../styles/typography/typography'
import creditLimit from '../../assets/img/credit-limit.svg'
import kyc from '../../assets/img/kyc.svg'
import finalize from '../../assets/img/finalize.svg'
import amount from '../../assets/img/amount.svg'

export default function Introduction() {
  const navigate = useNavigate()
  const handleLogout = () => {
    sessionStorage.removeItem("authToken")
    navigate("/")
  }

  const handleGetStarted = () => {
    navigate("mutual-fund")
  }
  return (
    <div className={pageStyle}>
      <div className='w-full'>
        <Header handleLeftIcon={handleLogout} />
      </div>
      <div className='w-full'>
        <SubHeader
          title={"Get started in under 2 mins"}
          subTitle={"Here's a quick overview of the process before you start"}
        />
      </div>

      {/* body */}
      <div className='mt-[20px] flex flex-col justify-between w-full'>
        <div className='flex justify-between items-center'>
          <div>
            <p className={`${inputBoxHeading} text-blackOne`}>Unlock the credit limit amount </p>
            <p className={`${inputBoxEmpty} text-grayOne`}>based on your MF portfolio.</p>
          </div>
          <img src={creditLimit} width={"20%"} alt="img" />
        </div>
        <div className='flex justify-between items-center my-[20px]'>
          <div>
            <p className={`${inputBoxHeading} text-blackOne`}>Select the amount</p>
            <p className={`${inputBoxEmpty} text-grayOne`}>you want to withdraw</p>
          </div>
          <img src={amount} width={"20%"} alt="img" />
        </div>
        <div className='flex justify-between items-center mb-[20px]'>
          <div>
            <p className={`${inputBoxHeading} text-blackOne`}>Quick KYC & Bank verification</p>
            <p className={`${inputBoxEmpty} text-grayOne`}>to get the funds in your bank account</p>
          </div>
          <img src={kyc} width={"25%"} alt="img" />
        </div>
        <div className='flex justify-between items-center'>
          <div>
            <p className={`${inputBoxHeading} text-blackOne`}>Finalise everything</p>
            <p className={`${inputBoxEmpty} text-grayOne`}>by signing loan agreement and setting up autopay</p>
          </div>
          <img src={finalize} width={"25%"} alt="img" />
        </div>
      </div>
      <div className={fixedBottomWithPadding}>
        <ButtonWithText label={"Get started"} handleClick={handleGetStarted} />
      </div>
    </div>
  )
}
