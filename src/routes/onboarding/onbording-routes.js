import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Introduction from '../../pages/onboarding/introduction'
import MutualFund from '../../pages/onboarding/mutual-fund'
import KfinPortfolio from '../../pages/onboarding/kfin-portfolio'
import CamsPortfolio from '../../pages/onboarding/cams-portfolio'
import KfinPortfolioMark from '../../pages/onboarding/kfin-portfolio-mark'
import CamsPortfolioMark from '../../pages/onboarding/cams-portfolio-mark'
import KycForm from '../../pages/onboarding/kyc-form'
import SelectBank from '../../pages/onboarding/select-bank'
import AddBank from '../../pages/onboarding/add-bank'
import OnboardingDashboard from '../../pages/onboarding/onboarding-dashboard'

export default function OnboardingRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Introduction />} />
      <Route path='/mutual-fund' element={<MutualFund />} />
      <Route path='/kfin' element={<KfinPortfolio />} />
      <Route path='/kfin-portfolio' element={<KfinPortfolioMark />} />
      <Route path='/cams' element={<CamsPortfolio />} />
      <Route path='/cams-portfolio' element={<CamsPortfolioMark />} />
      <Route path='/Kyc-form' element={<KycForm />} />
      <Route path='/select-bank' element={<SelectBank />} />
      <Route path='/add-bank' element={<AddBank />} />
      <Route path='/dashboard' element={<OnboardingDashboard />} />
    </Routes>
  )
}
