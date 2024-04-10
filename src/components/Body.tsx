import React, { useEffect, useState } from 'react'
import Filters from './Filters'
import List from './List'
import StyledBody from './styles/StyledBody.style'
import SearchResult from '../types/SearchResult'
import Country from '../types/Country'
import OrderBy from '../types/OrderBy'
import { getStocks } from "../api/sws"

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
  const [apiRequest, setApiRequest] = useState<SearchResult>(SEARCH_RESULT_INITIAL_STATE)
  const [countryFilter, setCountryFilter] = useState<Country>(COUNTRY_INITIA_STATE)
  const [orderBy, setOrderBy] = useState<OrderBy>(ORDER_BY_INITIAL_STATE)
  const [page, setPage] = useState<number>(1)
  const [loading, setLoading] = useState<boolean>(false)

  const { data } = apiRequest
  const onRequestSuccess = (data: SearchResult) => {
    setLoading(false)
    setApiRequest({ data: [...apiRequest.data, ...data.data] })
  }
  const onRequestFailure = () => { setApiRequest({ ...apiRequest }) }

  const fetchStocks = () => getStocks(countryFilter.countryCode, orderBy, page, onRequestSuccess, onRequestFailure)

  useEffect(() => {
    console.log("page changed", page)
    setLoading(true)
    fetchStocks()
  }, [page])

  const nextPage = () => {
    setPage(page + 1)
  }


  console.log(page)
  return (
    <StyledBody>
      <Filters countryFilter={countryFilter} orderBy={orderBy} setCountryFilter={setCountryFilter} setOrderBy={setOrderBy} />
      <List changePage={nextPage} loading={loading} data={data} />
    </StyledBody>
  )
}

export default Body