import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

//components
import InputField from '../../elements/input-field'
import ButtonWithText from '../buttons/buttonWithText'

//styles
import { headingOne, headingTwo } from '../../styles/typography/typography'
import { cardShadow } from '../../styles/global-css/global-css'
import { useNavigate } from 'react-router-dom'

//actions
import { getOtp } from '../../redux/actions/auth/get-otp'

export default function LoginCard() {
  const [number, setNumber] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleGetOtp = () => {
    const data = {
      phone: number,
      country_code: "IN"
    }
    dispatch(getOtp(number, data))
  }

  return (
    <div className={`${cardShadow} bg-white rounded-t-[8px] py-[12px] px-[16px]`}>
      <div className='mb-[16px]'>
        <h1 className={`${headingOne} text-blackOne`}>Welcome to Propell</h1>
        <p className={`${headingTwo} text-grayOne mt-[7px]`}>
          Enter your ph. number to login/signup with Propell
        </p>
      </div>
      <div>
        <InputField
          title={"Phone Number"}
          icon={"+91"}
          placeholder={"Enter you phone number"}
          type={'tel'}
          maxLength={10}
          value={number}
          handleChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <div>
        {number.length < 10 ?
          <ButtonWithText
            label={"Send OTP"}
            disabled
          />
          : <ButtonWithText
            label={"Send OTP"}
            handleClick={handleGetOtp}
          />}
      </div>
    </div>
  )
}
