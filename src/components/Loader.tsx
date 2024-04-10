import React from 'react'
import styled from 'styled-components'

const StyledLoader = styled.div`
.loaderContainer {
  text-align: center;
  height: 100vh;
  margin-top: 2rem;
}
  img {
    width: 5rem;
  }
`

const Loader = () => {
  return (
    <StyledLoader>
      <div className='loaderContainer'>
        <img src="/svgs/loader.svg" alt="logo" />
      </div>
    </StyledLoader>
  )
}

export default Loader