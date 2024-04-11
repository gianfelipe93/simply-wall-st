import styled from 'styled-components'

const StyledFilter = styled.div`
    .filterContainer {
        display: flex;
        justify-content: space-between;
        padding: 1rem 0px;

        .filters {
          display: flex;
          column-gap: 1rem;
        }

        .MuiOutlinedInput-root {
          background-color: #575853;
        }

        .MuiInputLabel-outlined {
          color: white;
        }

        .MuiAutocomplete-input {
          color: white;
        }
    }
`

export default StyledFilter