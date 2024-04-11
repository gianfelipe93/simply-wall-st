import styled from 'styled-components'

const StyledHeader = styled.div`
  .headerContainer {
    background-color: #3b3c36;
    display: flex;
    justify-content: center;
    column-gap: 3rem;
    align-items: center;

    .logo {
      width: 15rem;
    }

    .greetings {
      font-weight: 600;
      color: white;
    }
  }
`

export default StyledHeader