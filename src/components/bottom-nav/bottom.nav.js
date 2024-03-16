import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeBottomTab } from '../../redux/actions/onboarding/bottom-tab'

//styles
import HomeIcon from '../../assets/icons/home.svg'
import ActiveHomeIcon from '../../assets/icons/active-home.svg'
import PortfolioIcon from '../../assets/icons/portfolio.svg'
import PortfolioActiveIcon from '../../assets/icons/active-portfolio.svg'
import ProfileBottomNavIcon from '../../assets/icons/profile.svg'
import ProfileActiveIcon from '../../assets/icons/active-profile.svg'
import { captionOneBold, captionOne } from '../../styles/typography/typography'
import { cardShadow } from '../../styles/global-css/global-css'


export default function BottomNav() {
  const [active, setActive] = useState("Home")
  const dispatch = useDispatch()

  const tabs = [
    { name: "Home", icon: <img src={HomeIcon} alt='icon' />, activeIcon: <img src={ActiveHomeIcon} alt='icon' /> },
    { name: "Portfolio", icon: <img src={PortfolioIcon} alt='icon' />, activeIcon: <img src={PortfolioActiveIcon} alt='icon' /> },
    { name: "Profile", icon: <img src={ProfileBottomNavIcon} alt='icon' />, activeIcon: <img src={ProfileActiveIcon} alt='icon' /> }
  ]

  const handleTabClick = (tabName) => {
    setActive(tabName)
    dispatch(changeBottomTab(tabName))
  }

  return (
    <div className={`${cardShadow} flex flex-row items-center w-full h-[76px] justify-around md:w-screen-1/2 lg:w-screen-1/2 bg-white`}>
      {tabs.map((tab, index) => {
        return (
          <div key={index} className="flex flex-col items-center cursor-pointer" onClick={() => handleTabClick(tab.name)}>
            {active === tab.name ? <span>{tab.activeIcon}</span> : <span>{tab.icon}</span>}
            <p className={active === tab.name ? `${captionOneBold} text-purpleOne mt-[6px]` : `${captionOne} text-grayOne mt-[6px]`}>{tab.name}</p>
          </div>
        )
      })}
    </div>
  )
}
