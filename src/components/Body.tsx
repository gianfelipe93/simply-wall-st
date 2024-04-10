import React from 'react'
import Filters from './Filters'
import List from './List'
import StyledBody from './styles/StyledBody.style'

const Body = () => {
  return (
    <StyledBody>
      <Filters />
      <List />
    </StyledBody>
  )
}

export default Body