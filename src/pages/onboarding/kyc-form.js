import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

//components
import Header from '../../components/header/header'
import SubHeader from '../../components/sub-header/sub-header'
import ButtonWithText from '../../components/buttons/buttonWithText'
import InputField from '../../elements/input-field'

//elements
import Prompt from '../../elements/prompt'
import CustomSelect from '../../elements/select';
import RadioInput from '../../elements/radio-input';

//styles 
import { pageStyle, fixedBottomWithPadding } from '../../styles/layout/layout'
import InfoIcon from '../../assets/icons/info-icon.svg'
import { inputBoxHeading } from '../../styles/typography/typography'
import rentedIcon from '../../assets/icons/rented.svg'
import ownedIcon from '../../assets/icons/owned.svg'

export default function KycForm() {
  const [motherFirstName, setMotherFirstName] = useState('')
  const [motherLastName, setMotherLastName] = useState('')
  const [fatherFirstName, setFatherFirstName] = useState('')
  const [fatherLastName, setFatherLastName] = useState('')
  const [selectedOccupation, setSelectedOccupation] = useState(null);
  const [selectedMaritalStatus, setSelectedMaritalStatus] = useState(null);
  const [selectedAddressType, setSelectedAddressType] = useState('Owned');

  const occupationOptions = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
  ];

  const MaritalStatusOptions = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
  ];

  const addressTypes = [
    { name: "Owned", icon: <img src={ownedIcon} alt="icon" /> },
    { name: "Rented", icon: <img src={rentedIcon} alt="icon" /> },
  ]

  const navigate = useNavigate()

  const handleBack = () => {
    navigate('/onboarding/mutual-fund')
  }

  const handleInfo = () => {
    alert("info")
  }

  const handleContinue = () => {
    navigate("/onboarding/select-bank")
  }


  return (
    <div className={`${pageStyle}`}>
      <div className='fixed bg-white w-full'>
        <div className='w-full px-[16px] '>
          <Header
            handleLeftIcon={handleBack}
            rightIcon={InfoIcon}
            handleRightIcon={handleInfo}
            leftBackIcon />
        </div>
        <div className='w-full px-[16px]'>
          <SubHeader
            title={"We need some more details"}
            subTitle={"to verify your identity and keep you protected"}
          />
        </div>
      </div>
      <div className='w-full pb-[100px] overflow-y-auto no-scrollbar'>
        <div className='mt-[120px] flex justify-between w-full'>
          <div className='w-full mr-[15px]'>
            <InputField
              title={"Mother’s name"}
              placeholder={"First name"}
              handleChange={(e) => setMotherFirstName(e.target.value)}
              type={"text"}
              value={motherFirstName}
            />
          </div>
          <div className='w-full mt-[16px] ml-[15px]'>
            <InputField
              // title={"Mother’s name"}
              placeholder={"Last name"}
              handleChange={(e) => setMotherLastName(e.target.value)}
              type={"text"}
              value={motherLastName}
            />
          </div>
        </div>
        <div className='mt-[25px] flex justify-between w-full'>
          <div className='w-full mr-[15px]'>
            <InputField
              title={"Father`s name"}
              placeholder={"First name"}
              handleChange={(e) => setFatherFirstName(e.target.value)}
              type={"text"}
              value={fatherFirstName}
            />
          </div>
          <div className='w-full mt-[16px] ml-[15px]'>
            <InputField
              // title={"Mother’s name"}
              placeholder={"Last name"}
              handleChange={(e) => setFatherLastName(e.target.value)}
              type={"text"}
              value={fatherLastName}
            />
          </div>
        </div>
        <div className='w-full mt-[20px]'>
          <p className={`text-purpleOne mb-[10px] ${inputBoxHeading}`}>
            {"Confirm what type of property is this-"}
          </p>
          <Prompt
            title={"Address"}
            content={"18/823,Gomti nagar, Gurgaon, Haryana, 448877"}
          />
        </div>
        <div className='mt-[12px] w-full'>
          <RadioInput
            setSelectedValue={setSelectedAddressType}
            selectedValue={selectedAddressType}
            options={addressTypes}
            valueType={"addressType"}
          />
        </div>
        <div className='mt-[20px] w-full'>
          <p className={`text-purpleOne mb-[10px] ${inputBoxHeading}`}>
            {"Occupation"}
          </p>
          <CustomSelect
            selectedOption={selectedOccupation}
            setSelectedOption={setSelectedOccupation}
            options={occupationOptions}
          />
        </div>
        <div className='mt-[20px] w-full'>
          <p className={`text-purpleOne mb-[10px] ${inputBoxHeading}`}>
            {"Marital status"}
          </p>
          <CustomSelect
            selectedOption={selectedMaritalStatus}
            setSelectedOption={setSelectedMaritalStatus}
            options={MaritalStatusOptions}
          />
        </div>
      </div>
      <div className={fixedBottomWithPadding}>
        <ButtonWithText label={"Continue"} handleClick={handleContinue} />
      </div>
    </div>
  )
}
