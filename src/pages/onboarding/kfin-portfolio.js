import React, { useState } from 'react'

//components
import Header from '../../components/header/header'
import SubHeader from '../../components/sub-header/sub-header'
import ButtonWithText from '../../components/buttons/buttonWithText'
import InputField from '../../elements/input-field'

//styles
import { pageStyle, fixedBottomWithPadding } from '../../styles/layout/layout'
import { useNavigate } from 'react-router-dom'
import InfoIcon from '../../assets/icons/info-icon.svg'
import emailIcon from '../../assets/icons/email.svg'


export default function KfinPortfolio() {
  const [pan, setPan] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const navigate = useNavigate()

  const handleBack = () => {
    navigate('/onboarding/mutual-fund')
  }

  const handleInfo = () => {
    alert("info")
  }

  const handleFetchPortfolio = () => {
    navigate('/onboarding/kfin-portfolio')
  }

  return (
    <div className={pageStyle}>
      <div className='w-full'>
        <Header
          handleLeftIcon={handleBack}
          rightIcon={InfoIcon}
          handleRightIcon={handleInfo}
          leftBackIcon />
      </div>
      <div className='w-full'>
        <SubHeader
          title={"Kfin portfolio fetch"}
          subTitle={"We need your PAN, email & phone to fetch your MF portfolio from Kfin."}
        />
      </div>
      <div className='w-full mt-[16px]'>
        <InputField
          title={"Permanent Account Number"}
          icon={"PAN"}
          placeholder={"JSUAIS32329L"}
          handleChange={(e) => setPan(e.target.value)}
          type={"text"}
          value={pan}
          maxLength={10}
        />
      </div>
      <div className='w-full mt-[16px]'>
        <InputField
          title={"Email address (Linked to your KFin account)"}
          icon={emailIcon}
          placeholder={"xyz@gmail.com"}
          handleChange={(e) => setEmail(e.target.value)}
          type={"email"}
          value={email}
        />
      </div>
      <div className='w-full mt-[16px]'>
        <InputField
          title={"Phone number (Linked to your KFin account)"}
          icon={"+91"}
          placeholder={"8789459878"}
          handleChange={(e) => setNumber(e.target.value)}
          type={"number"}
          value={number}
        />
      </div>
      <div className={fixedBottomWithPadding}>
        {pan.length === 0 || email.length === 0 || number.length === 0 ?
          <ButtonWithText label={"Fetch my portfolio"} disabled /> :
          <ButtonWithText label={"Fetch my portfolio"} handleClick={handleFetchPortfolio} />}
      </div>
    </div>
  )
}
