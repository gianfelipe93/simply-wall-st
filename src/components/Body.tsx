import React, { useEffect, useRef, useState } from 'react'
import Filters from './Filters'
import List from './List'
import StyledBody from './styles/StyledBody.style'
import Country from '../types/Country'
import OrderBy from '../types/OrderBy'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../state/store'
import { getStocksAsync, reset } from '../state/storeSlice'
import { Button } from '@mui/material'

const SEARCH_RESULT_INITIAL_STATE = {
  data: [],
  meta: {
    total_records: 0,
    real_total_records: 0,
    state: 'read',
    noResultIfLimit: false,
    pe: 0,
    return_1yr_abs: 0,
    return_7d: 0
  }
}

const COUNTRY_INITIA_STATE = { countryCode: 'au', countryName: 'Australia' }

const ORDER_BY_INITIAL_STATE = { field: 'market_cap', direction: 'desc', label: 'Market Cap - High to low' }

const Body = () => {
  const [countryFilter, setCountryFilter] = useState<Country>(COUNTRY_INITIA_STATE)
  const [orderBy, setOrderBy] = useState<OrderBy>(ORDER_BY_INITIAL_STATE)
  const [page, setPage] = useState<number>(1)
  const prevCountryFilter = useRef(countryFilter)

  const { loading } = useSelector((state: RootState) => state.stock) as { loading: boolean | undefined }
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    const countryFilterChanged = prevCountryFilter.current.countryCode !== countryFilter.countryCode

    if (countryFilterChanged) {//if the country filter changed, reset the state
      dispatch(reset())
    }
    dispatch(getStocksAsync({ countryFilter: countryFilter.countryCode, orderBy, page: countryFilterChanged ? 1 : page }))
    prevCountryFilter.current = countryFilter
  }, [page, countryFilter, orderBy.field])

  const getNextBatch = () => setPage(prev => prev + 1)

  return (
    <StyledBody>
      <Filters countryFilter={countryFilter} orderBy={orderBy} setCountryFilter={setCountryFilter} setOrderBy={setOrderBy} />
      <List getNextBatch={getNextBatch} />
    </StyledBody>
  )
}

export default Body