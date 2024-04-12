import React from 'react'
import OrderBy from '../types/OrderBy';
import Country from '../types/Country';
import { Autocomplete, TextField } from '@mui/material';
import { COUNTRY_LIST, FILTER_BY_COUNTRY, ORDER_BY, ORDER_BY_LIST, SELECT_LANGUAGE, SUPPORTED_LANGUAGES } from '../util/constants';
import StyledFilter from './styles/StyledFilter.style';
import { useTranslation } from 'react-i18next';

type FilterProps = {
  setCountryFilter: (country: Country) => void;
  setOrderBy: (orderBy: OrderBy) => void;
  countryFilter: Country;
  orderBy: OrderBy;
}

type Language = {
  code: string;
  name: string;
}

const Filters = (props: FilterProps) => {
  const [language, setLanguage] = React.useState<Language>(SUPPORTED_LANGUAGES[0])
  const { countryFilter, setCountryFilter, setOrderBy, orderBy } = props;
  const { t, i18n } = useTranslation()
  return (
    <StyledFilter>
      <div className='filterContainer'>
        <div className='filters'>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={COUNTRY_LIST}
            sx={{ width: 300 }}
            getOptionLabel={(option) => option.countryName}
            isOptionEqualToValue={(option, value) => option.countryCode === value.countryCode}
            value={countryFilter}
            disableClearable={true}
            renderInput={(params) => <TextField {...params} label={t(FILTER_BY_COUNTRY)} />}
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
            disableClearable={true}
            renderInput={(params) => <TextField {...params} label={t(ORDER_BY)} />}
            value={orderBy}
            onChange={(event: any, option: OrderBy | null) => {
              if (option) {
                setOrderBy(option);
              }
            }}
          />
        </div>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={SUPPORTED_LANGUAGES}
          sx={{ width: 300 }}
          isOptionEqualToValue={(option, value) => option.code === value.code}
          getOptionLabel={(option) => option.name || ''}
          disableClearable={true}
          renderInput={(params) => <TextField {...params} label={t(SELECT_LANGUAGE)} />}
          value={language}
          onChange={(event: any, option: Language | null) => {
            if (option) {
              setLanguage(option);
              i18n.changeLanguage(option.code)
            }
          }}
        />
      </div>
    </StyledFilter>
  )
}

export default Filters