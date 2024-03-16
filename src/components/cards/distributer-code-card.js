import React, { useState } from 'react'

//styles
import { cardShadow } from '../../styles/global-css/global-css'
import { headingOne, headingTwo, headingTwoBold } from '../../styles/typography/typography'

//components
import ButtonWithText from '../buttons/buttonWithText'
import InputField from '../../elements/input-field';

export default function DistributerCodeCard() {
  const [distributorCode, setDistributorCode] = useState('')

  const handleVerify = () => {

  }

  const handleNoDistributorcode = () => {

  }

  return (
    <div>
      <div className={`${cardShadow} fixed w-full bottom-0 z-50 p-[16px] rounded-t-[16px] bg-white outline-none focus:outline-none`}>
        <div className='mb-[16px]'>
          <h1 className={`${headingOne} text-blackOne`}>Enter the distributor code</h1>
          <p className={`${headingTwo} text-grayOne mt-[7px]`}>
            Enter your distributor’s code to continue
          </p>
        </div>

        <div className='mb-[16px]'>
          <InputField
            title={"Distributor code"}
            placeholder={"eg. ABSJA76788"}
            handleChange={(e) => setDistributorCode(e.target.value)}
          />
        </div>

        {distributorCode.length > 2 ?
          <ButtonWithText label={'Verify'} handleClick={handleVerify} />
          : <ButtonWithText label={'Verify'} disabled />}

        <div className='text-center mt-[16px] cursor-pointer'>
          <h1 onClick={handleNoDistributorcode} className={`${headingTwoBold} text-purpleOne`}>
            I don't have a distributor’s code
          </h1>
        </div>

      </div>

      <div className="fixed opacity-25 inset-0 z-0 bg-purpleOne">
      </div>
    </div>
  )
}
