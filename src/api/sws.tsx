import axios from 'axios'
import { STOCK_PER_PAGE } from '../util/constants'
import OrderBy from '../types/OrderBy'
import SearchResult from '../types/SearchResult'

const API_URL = 'https://simplywall.st/api/grid/filter?include=grid,score'

const formatRules = (
  countryFilter: string,
  orderBy: OrderBy,
) => {
  const { field, direction } = orderBy
  var rulesArray: ((string | boolean)[] | (string | (string | string[])[][])[])[] = [["primary_flag", "=", true], ["grid_visible_flag", "=", true], ["market_cap", "is_not_null"], ["is_fund", "=", false]]

  if (countryFilter && countryFilter !== 'gl') {
    rulesArray.push(["aor", [["country_name", "in", [countryFilter]]]])
  }

  if (field) {
    rulesArray.push(["order_by", field, direction])
  }

  return rulesArray
}

export const getStocks = async (
  countryFilter: string,
  orderBy: OrderBy,
  page: number,
) => {
  const rules = formatRules(countryFilter, orderBy)
  const offset = page === 1 ? 0 : (page - 1) * STOCK_PER_PAGE

  const payload = {
    size: STOCK_PER_PAGE,
    offset,
    rules
  }

  const response = await axios.post(API_URL, payload, { headers: { 'sws': 'fe-challenge' } })

  return response.data
}