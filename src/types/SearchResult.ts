import Meta from "./Meta";
import Stock from "./Stock";

type SearchResult = {
  data: Stock[],
  meta: Meta
}

export default SearchResult;