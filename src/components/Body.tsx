import React, { useEffect, useRef, useState } from 'react'
import Filters from './Filters'
import List from './List'
import StyledBody from './styles/StyledBody.style'
import Country from '../types/Country'
import OrderBy from '../types/OrderBy'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../state/store'
import { getStocksAsync, reset } from '../state/storeSlice'

const COUNTRY_INITIA_STATE = { countryCode: 'au', countryName: 'Australia' }

const ORDER_BY_INITIAL_STATE = { field: 'market_cap', direction: 'desc', label: 'Market Cap - High to low' }

const Body = () => {
  const [countryFilter, setCountryFilter] = useState<Country>(COUNTRY_INITIA_STATE)
  const [orderBy, setOrderBy] = useState<OrderBy>(ORDER_BY_INITIAL_STATE)
  const [page, setPage] = useState<number>(1)
  const prevCountryFilter = useRef(countryFilter)

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