import React from 'react'
import OrderBy from '../types/OrderBy';
import Country from '../types/Country';
import { Autocomplete, TextField } from '@mui/material';
import { COUNTRY_LIST, ORDER_BY_LIST } from '../util/constants';
import StyledFilter from './styles/StyledFilter.style';

type FilterProps = {
  setCountryFilter: (country: Country) => void;
  setOrderBy: (orderBy: OrderBy) => void;
  countryFilter: Country;
  orderBy: OrderBy;
}

const Filters = (props: FilterProps) => {
  const { countryFilter, setCountryFilter, setOrderBy, orderBy } = props;

  return (
    <StyledFilter>
      <div className='filterContainer'>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={COUNTRY_LIST}
          sx={{ width: 300 }}
          getOptionLabel={(option) => option.countryName}
          isOptionEqualToValue={(option, value) => option.countryCode === value.countryCode}
          value={countryFilter}
          renderInput={(params) => <TextField {...params} label="Filter by country" />}
          onChange={(event: any, option: Country | null) => {
            if (option) {
              setCountryFilter(option);
            }
          }}
        />

        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={ORDER_BY_LIST}
          sx={{ width: 300 }}
          isOptionEqualToValue={(option, value) => option.field === value.field}
          getOptionLabel={(option) => option.label || ''}
          renderInput={(params) => <TextField {...params} label="Order By" />}
          value={orderBy}
          onChange={(event: any, option: OrderBy | null) => {
            if (option) {
              setOrderBy(option);
            }
          }}
        />
      </div>
    </StyledFilter>
  )
}

export default Filters