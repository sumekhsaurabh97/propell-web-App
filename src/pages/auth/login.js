import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

//components
import LoginCarousel from '../../components/carousel/carousel'
import LoginCard from '../../components/cards/login-card'
import OtpCard from '../../components/cards/otp-card'
import DistributerCodeCard from '../../components/cards/distributer-code-card'

//styles
import Logo from '../../assets/img/logo.svg'
import { pageStyle, fixedBottom } from '../../styles/layout/layout'

export default function Login() {
  const { getOtpReducer, verifyOtpReducer } = useSelector(state => state)

  useEffect(() => {
    // console.log(getOtpReducer.data)
  }, [getOtpReducer])


  return (
    <div className={`${pageStyle}`}>
      <div className='mb-[20px]'>
        <img src={Logo} alt="logo" />
      </div>
      <LoginCarousel />
      <div className={`${fixedBottom} z-10`}>
        {Object.keys(getOtpReducer.data).length === 0 ? <LoginCard /> : <OtpCard />}
      </div>
    </div>
  )
}
