import styled from 'styled-components'

const StyledTile = styled.div`
    
  .tileSize {
    width: 20rem;
    height: 25rem;
  }
  .logoContainer {
    width: 100%;
    position: sticky;

    img {
      position: absolute;
      opacity: .2;  
    }
  }

  .tileContainer {
    overflow: hidden; 
    border-radius: 2%;

    .stockName {
      font-weight: 600;
    }

    .stockBasicInfo {
    padding: 0.65rem;
      z-index: 1;
      position: relative;
      background-color: rgba(45, 45, 40, 0.65);
      backdrop-filter: blur(5px);
    }
  }
`

export default StyledTile