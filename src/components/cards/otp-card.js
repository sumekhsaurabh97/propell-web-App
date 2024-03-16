import React, { useEffect, useState } from 'react'
import OtpInput from 'react18-otp-input';
import { useDispatch, useSelector } from 'react-redux';

//components
import ButtonWithText from '../buttons/buttonWithText';

//styles
import { cardShadow } from '../../styles/global-css/global-css'
import { headingOne, headingTwo, headingTwoBold, captionTwo, textLink } from '../../styles/typography/typography';
import EditIcon from '../../assets/icons/edit.svg'

//actions 
import { verifyOtp } from '../../redux/actions/auth/verify-otp';
import { getOtp, editNumber } from '../../redux/actions/auth/get-otp';
import { useNavigate } from 'react-router-dom';

export default function OtpCard() {
  const [otp, setOtp] = useState('');
  const [counter, setCounter] = useState(40);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { getOtpReducer } = useSelector(state => state)

  useEffect(() => {
    const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter])

  const handleOtp = (otp) => {
    setOtp(otp.replace(/[^\d]/g, ''))
  }

  const handleEdit = () => {
    dispatch(editNumber());
  }

  const handleVerifyOtp = () => {
    const data = {
      phone: getOtpReducer.number,
      otp: otp,
      distributor_id: "string",
      platform_id: "string"
    }
    dispatch(verifyOtp(data, navigate))
  }

  const handleResendOtp = () => {
    setCounter(40);
    const data = {
      phone: getOtpReducer.number,
      country_code: "IN"
    }
    dispatch(getOtp(getOtpReducer.number, data))
  }

  return (
    <div>
      <div className={`${cardShadow} fixed w-full bottom-0 z-50 p-[16px] rounded-t-[16px] bg-white outline-none focus:outline-none`}>
        <h1 className={`${headingOne} text-blackOne`}>Enter OTP</h1>
        <div className='flex items-center'>
          <div>
            <p className={`${headingTwo} text-grayOne mt-[7px]`}>
              OTP sent to +91 <span className={`${headingTwoBold} text-blackOne`}>{getOtpReducer.number}</span>
            </p>
          </div>
          <div className='cursor-pointer ml-[4px]' onClick={handleEdit}>
            <img src={EditIcon} alt="edit" />
          </div>
        </div>
        <div className='my-[22px] flex items-center'>
          <OtpInput
            autoComplete="off"
            isInputNum={true}
            value={otp}
            onChange={(otp) => handleOtp(otp)}
            numInputs={4}
            separator={<span style={{ width: "8px" }}></span>}
            shouldAutoFocus={true}
            inputStyle={{
              backgroundColor: "#F5F5FA",
              color: "#5516AA",
              border: null,
              borderRadius: '4px',
              width: "42px",
              height: "42px",
              fontSize: "24px",
              fontWeight: "500",
              marginHorizontal: "2px"
            }}
            focusStyle={{
              outline: "none",
              border: '1.5px solid #5516AA', borderRadius: '4px'
            }}
          />
        </div>
        <div>
          {otp.length < 4 ? (
            <ButtonWithText label={'Verify OTP'} disabled />
          ) : (
            <ButtonWithText label={'Verify OTP'} handleClick={handleVerifyOtp} />
          )}
        </div>

        <div className='mt-[12px] mb-[15px] flex items-center justify-center'>
          {counter === 0 ? (
            <p onClick={handleResendOtp} className={`${textLink} cursor-pointer text-purpleOne`}>
              Resend OTP
            </p>
          ) : (
            <p className={`${headingTwo} text-grayOne`}>
              Resend OTP in <span>00:{counter}</span>
            </p>
          )}
        </div>

        <p className={`${captionTwo} text-grayOne`}>
          By clicking on Verify OTP, you agree to have read the
          <a
            className='text-purpleOne cursor-pointer'
            href='https://google.com'
            target='_blank'
            rel="noreferrer"
          >
            {' '}
            Terms and Conditions
          </a>{' '}
          and
          <a
            className='text-purpleOne cursor-pointer'
            href='https://google.com'
            target='_blank'
            rel="noreferrer"
          >
            {' '}
            Privacy policy
          </a>{' '}
          and wish to continue.
        </p>

      </div>
      <div className="fixed opacity-25 inset-0 z-0 bg-purpleOne">
      </div>
    </div>
  )
}
