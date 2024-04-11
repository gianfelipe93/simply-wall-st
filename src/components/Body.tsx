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
  const prevPage = useRef<number>(page)

  const dispatch = useDispatch<AppDispatch>()

  // useEffect(() => {
  //   const countryFilterChanged = prevCountryFilter.current.countryCode !== countryFilter.countryCode
  //   const prevOrderByDirection = prevOrderByFilter.current.direction !== orderBy.direction

  //   var nextPage = page // had to create this because the page state was not updating in the dispatch call

  //   if (countryFilterChanged || prevOrderByDirection) {//if the country filter changed, reset the state and set page to 1
  //     setPage(1)

  //     nextPage = 1
  //     prevCountryFilter.current = countryFilter
  //     prevOrderByFilter.current = orderBy
  //   }

  //   dispatch(getStocksAsync({ countryFilter: countryFilter.countryCode, orderBy, page: nextPage }))
  // }, [page, countryFilter, JSON.stringify(orderBy)])

  useEffect(() => {
    dispatch(reset())

    if (page === 1) {
      dispatch(getStocksAsync({ countryFilter: countryFilter.countryCode, orderBy, page }))
    } else {
      setPage(1)
    }
  }, [countryFilter, JSON.stringify(orderBy)])

  useEffect(() => {
    if (prevPage.current !== page) {
      dispatch(getStocksAsync({ countryFilter: countryFilter.countryCode, orderBy, page }))
    }

    prevPage.current = page
  }, [page])

  const getNextBatch = () => {
    setPage((prev: number) => prev + 1)
  }

  return (
    <StyledBody>
      <Filters countryFilter={countryFilter} orderBy={orderBy} setCountryFilter={setCountryFilter} setOrderBy={setOrderBy} />
      <List getNextBatch={getNextBatch} />
    </StyledBody>
  )
}

export default Body