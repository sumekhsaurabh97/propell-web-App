import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";

//styles
import { captionOne, headingOne, inputBoxHeading } from '../../styles/typography/typography';
import { cardShadow } from '../../styles/global-css/global-css';

export default function HomeCreditStatusCard({ title, availableAmount, date, usedCredit, totalCreditLimit }) {

  const usedPercentage = (usedCredit / totalCreditLimit) * 100

  return (
    <div className={`${cardShadow} rounded-[8px] bg-white`}>
      <div className={`px-[20px] py-[16px] bg-[url('/src/assets/img/dashboardBg.svg')] justify-center bg-no-repeat bg-cover rounded-t-[8px]`}>
        <p className={`${captionOne} text-white`}>{title}</p>
        <p className={`${headingOne} text-white mt-[4px]`}>₹ {availableAmount}</p>
      </div>
      <div className='px-[16px] pt-[10px] pb-[20px]'>
        <p className={`${captionOne} text-grayOne`}>{date}</p>
        <div className='mt-[47px] flex justify-between'>
          <div>
            <p className={`${captionOne} text-grayOne`}>
              Used <span className={`${inputBoxHeading} text-grayOne`}> ₹ {usedCredit}</span>
            </p>
            <div className='mt-[10px]'>
              <ProgressBar
                completed={usedPercentage} //used percentage
                customLabel={" "}
                height={"4px"}
                borderRadius={"8px"}
                bgColor={"#5516AA"}
                baseBgColor={"#F6F0FE"}
              />
            </div>
          </div>
          <div>
            <p className={`${captionOne} text-grayOne`}>Total credit limit</p>
            <p className={`${inputBoxHeading} text-blueThree mt-[4px] text-purpleOne`}>₹ {totalCreditLimit}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
