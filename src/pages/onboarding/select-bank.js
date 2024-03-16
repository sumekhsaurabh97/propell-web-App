import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

//styles
import { fixedBottomWithPadding, pageStyle } from '../../styles/layout/layout'
import InfoIcon from '../../assets/icons/info-icon.svg'
import icicIcon from '../../assets/img/icici-icon.svg'
import plus from '../../assets/icons/plus.svg'

//components
import Header from '../../components/header/header'
import SubHeader from '../../components/sub-header/sub-header'
import ButtonWithText from '../../components/buttons/buttonWithText'
import BankList from '../../components/bank-list/bank-list'
import SecondaryButton from '../../components/buttons/secondary-button'


export default function SelectBank() {
  const [bank, setBank] = useState("ICICI Bank");
  const navigate = useNavigate()

  const banks = [
    { name: "ICICI Bank", account_no: 12343434343, ifsc: "YUGH14257", icon: <img src={icicIcon} width={"100%"} alt="img" /> },
    { name: "Axis Bank", account_no: 12343434343, ifsc: "YUGH14257", icon: <img src={icicIcon} width={"100%"} alt="img" /> },
  ]

  const handleBack = () => {
    navigate('/onboarding/kyc-form')
  }

  const handleInfo = () => {
    alert("info")
  }

  const handleVerifyBank = () => {
    navigate('/onboarding/dashboard')
  }

  const handleAddBank = () => {
    navigate('/onboarding/add-bank')
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
          title={"Choose your bank"}
          subTitle={"All the withdrawal requests will be credited to this bank account"}
        />
      </div>
      <div className='w-full pt-[20px] pb-[50px] overflow-y-auto no-scrollbar'>
        <BankList
          setSelectedValue={setBank}
          selectedValue={bank}
          options={banks}
          valueType={"bank"}
        />
        <div className='mt-[20px]'>
          <SecondaryButton
            label={"Add new bank account"}
            icon={<img src={plus} alt="icon" />}
            handleClick={handleAddBank}
          />
        </div>
      </div>
      <div className={fixedBottomWithPadding}>
        <ButtonWithText label={"Verify bank account"} handleClick={handleVerifyBank} />
      </div>
    </div>
  )
}

