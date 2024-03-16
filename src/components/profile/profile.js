import React from 'react'

import logo from '../../assets/icons/logo-with-text.svg'
import { cardShadow } from '../../styles/global-css/global-css'
import { headingOne, headingTwo } from '../../styles/typography/typography'
import accountDetail from '../../assets/icons/account.svg'
import refer from '../../assets/icons/refer_and_earn.svg'
import faq from '../../assets/icons/help.svg'
import support from '../../assets/icons/support.svg'
import term from '../../assets/icons/terms_and_conditions.svg'
import privacy from '../../assets/icons/terms_and_conditions.svg'
import accountSummary from '../../assets/icons/account_summary.svg'
import logout from '../../assets/icons/logout_profile.svg'

const profileList = [
  { name: "Account details", icon: <img src={accountDetail} alt='icon' width={'5%'} /> },
  { name: "Refer and earn", icon: <img src={refer} alt='icon' width={'5%'} /> },
  { name: "FAQ", icon: <img src={faq} alt='icon' width={'5%'} /> },
  { name: "Support", icon: <img src={support} alt='icon' width={'5%'} /> },
  { name: "Terms and conditions", icon: <img src={term} alt='icon' width={'5%'} /> },
  { name: "Privacy Policy", icon: <img src={privacy} alt='icon' width={'5%'} /> },
  { name: "Account Summary", icon: <img src={accountSummary} alt='icon' width={'5%'} /> },
  { name: "Logout", icon: <img src={logout} alt='icon' width={'5%'} /> },
]


export default function Profile() {
  return (
    <>
      <div className='w-full absolute top-0'>
        <div className={`bg-purpleOne flex justify-center items-center py-[30px] pb-[65px]`}>
          <img src={logo} alt="logo" />
        </div>
        <div className={`${cardShadow} sm:w-[95%] w-[90%] py-[14px] px-[22px] bg-white absolute top-[80px] mx-[20px] rounded-[8px] flex justify-start items-center`}>
          <div className='bg-bgPurpleThree w-[60px] h-[60px] rounded-[40px] flex justify-center items-center'>
            <p className={`${headingOne} text-purpleOne`}>RV</p>
          </div >
          <p className={`${headingTwo} text-blackOne ml-[24px]`}>Rajeev verma</p>
        </div>
      </div>
      <div className='absolute top-[200px] w-full overflow-y-auto no-scrollbar bottom-[100px]'>
        {profileList.map((menu, index) => {
          return <div key={index} className='flex justify-between items-center  border-b-[1px] px-[20px] py-[20px]'>
            <p className={`${headingTwo} text-grayOne`}>{menu.name}</p>
            {menu.icon}
          </div>
        })}
      </div>

    </>
  )
}
