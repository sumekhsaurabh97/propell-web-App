import React from 'react'


//styles
import { captionOne, headingTwoBold } from '../../styles/typography/typography'
import pendingIcon from '../../assets/icons/pendingIcon.svg'

export default function TransactionHistoryList({ amount, status, date }) {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex items-center'>
        <div>
          <img src={status === "Pending" ? pendingIcon : null} alt="icon" />
        </div>
        <div className='ml-[16px]'>
          <p className={`${headingTwoBold} text-blackFour`}>{amount}</p>
          <p className={`${captionOne} text-grayOne`}>{status}</p>
        </div>
      </div>
      <p className={`${captionOne} text-grayOne`}>{date}</p>
    </div>
  )
}