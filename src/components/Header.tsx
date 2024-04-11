import React from 'react'
import StyledHeader from './styles/StyledHeader.style'

const Header = () => {
  return (
    <StyledHeader>
      <div className="headerContainer">
        <div className="logo">
          <img src="/svgs/logo.svg" alt="logo" />
        </div>
      </div>
    </StyledHeader>
  )
}

export default Header