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

export default function AddBank() {
  const [accountNo, setAccountNo] = useState('')
  const [confirmAccountNo, setConfirmAccountNo] = useState('')
  const [ifsc, setIfsc] = useState('')
  const navigate = useNavigate()

  const handleBack = () => {
    navigate('/onboarding/select-bank')
  }

  const handleInfo = () => {
    alert("info")
  }

  const handleAddBank = () => {
    navigate('/onboarding/select-bank')
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
          title={"Add new bank account"}
          subTitle={"All the withdrawal requests will be credited to this bank account"}
        />
      </div>
      <div className='w-full mt-[16px]'>
        <InputField
          title={"Bank account number"}
          placeholder={"eg. 2182718291827"}
          handleChange={(e) => setAccountNo(e.target.value)}
          type={"text"}
          value={accountNo}
        />
      </div>
      <div className='w-full mt-[16px]'>
        <InputField
          title={"Confirm bank account number"}
          placeholder={"eg. 2182718291827"}
          handleChange={(e) => setConfirmAccountNo(e.target.value)}
          type={"text"}
          value={confirmAccountNo}
        />
      </div>
      <div className='w-full mt-[16px]'>
        <InputField
          title={"IFSC Code"}
          placeholder={"eg. DENA00001223"}
          handleChange={(e) => setIfsc(e.target.value)}
          type={"text"}
          value={ifsc}
        />
      </div>
      <div className={fixedBottomWithPadding}>
        {accountNo.length === 0 || confirmAccountNo.length === 0 || ifsc.length === 0 ?
          <ButtonWithText label={"Add and verify bank account"} disabled /> :
          <ButtonWithText label={"Add and verify bank account"} handleClick={handleAddBank} />}
      </div>
    </div>
  )
}
