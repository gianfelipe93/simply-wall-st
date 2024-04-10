import React, { useEffect, useState } from "react"
import SearchResult from "../types/SearchResult"
import Tile from "./Tile"
import Stock from "../types/Stock"
import StyledList from "./styles/StyledList.style"
import { getStocks } from "../api/sws"
import OrderBy from "../types/OrderBy"
import Country from "../types/Country"
import Loader from "./Loader"
import Filters from "./Filters"

type ListProps = {
  loading: boolean;
  data: Stock[];
  changePage: () => void;
}

const List = (props: ListProps) => {
  const { loading, data, changePage } = props

  useEffect(() => {
    let lastScrollY = 0; // Keep track of the previous scroll position

    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
      const currentScrollY = scrollTop;

      // Check if scrolling down and close to the end
      if (currentScrollY > lastScrollY && scrollTop + clientHeight >= scrollHeight - 30 && !loading
      ) {
        changePage();
      }

      lastScrollY = currentScrollY; // Update for the next comparison
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <StyledList>
      <div className="row listContainer">
        {data.map((stock: Stock) => (<Tile stock={stock} key={stock.id} />))}
      </div>
      {loading && <Loader />}
    </StyledList>
  )
}



export default List