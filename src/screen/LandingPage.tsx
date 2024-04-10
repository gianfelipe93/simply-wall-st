import { useEffect, useState } from 'react'
import StyledLandingPage from './StyledLandingPage.style'
import Header from '../components/Header'
import React from 'react'
import List from '../components/List'

const supportedCountries = ['Australia', 'Canada', 'United States', 'United Kingdom']

const LandingPage = () => {
  const [country, setCountry] = useState('Australia')

  useEffect(() => {
    setInterval(() => {
      const randomIndex = Math.floor(Math.random() * supportedCountries.length)
      setCountry(supportedCountries[randomIndex])
    }, 2500)
  })

  return (
    <StyledLandingPage>
      <Header />
      <List />
    </StyledLandingPage>
  )
}

export default LandingPage