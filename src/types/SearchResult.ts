import Meta from "./Meta";
import Stock from "./Stock";

type SearchResult = {
  data: Stock[],
  meta: Meta,
  loading?: boolean
}

export default SearchResult;