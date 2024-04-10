import React from 'react'
import StyledHeader from './styles/Header.style'

const Header = () => {
  return (
    <StyledHeader>
      <div className="headerContainer">
        <div className="logo">
          <img src="/svgs/logo.svg" alt="logo" />
        </div>
        <div className="greetings">WELCOME TO GIAN'S STOCK SEARCH</div>
      </div>
    </StyledHeader>
  )
}

export default Header