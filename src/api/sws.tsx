import axios from 'axios'
import { STOCK_PER_PAGE } from '../util/constants'
import Stock from '../types/Stock'

type GetStockProps = {
  countryFilter: string,
  orderBy: string,
  orderDirection: string,
  page: number,
  callback: (stocks: Stock[]) => void
}

const API_URL = 'https://simplywall.st/api/grid/filter?include=grid,score'

const formatRules = (props: GetStockProps) => {
  const { countryFilter, orderBy, orderDirection } = props
  var rulesArray: ((string | boolean)[] | (string | (string | string[])[][])[])[] = [["primary_flag", "=", true], ["grid_visible_flag", "=", true], ["market_cap", "is_not_null"], ["is_fund", "=", false]]

  if (countryFilter) {
    rulesArray.push(["aor", [["country_name", "in", [countryFilter]]]])
  }

  if (orderBy) {
    rulesArray.push(["order_by", orderBy, orderDirection])
  }

  return rulesArray
}

export const getStocks = async (props: GetStockProps) => {
  const { page } = props
  const rules = formatRules(props)

  const payload = {
    offset: page * STOCK_PER_PAGE,
    size: STOCK_PER_PAGE,
    rules
  }


}