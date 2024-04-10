import { Grid } from "./Grid";
import { Score } from "./Score";

export const rootVar = "data"

type Stock = {
  id: number;
  company_id: string;
  trading_item_id: number;
  name: string;
  slug: string;
  exchange_symbol: string;
  ticker_symbol: string;
  unique_symbol: string;
  primary_ticker: boolean;
  last_updated: number;
  canonical_url: string;
  primary_canonical_url: string;
  is_searchable: boolean;
  isin_symbol: string,
  score: { [rootVar]: Score };
  grid: { [rootVar]: Grid };
}

export default Stock;

