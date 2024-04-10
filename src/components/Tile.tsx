import React from 'react'
import Stock from '../types/Stock'
import Chart from './Chart'
import StyledTile from './styles/StyledTile.style'
import Skeleton from 'react-loading-skeleton'

type TileProps = {
  stock: Stock
}

const Tile = (props: TileProps) => {
  const { stock } = props

  return (
    <StyledTile className='col-3'>
      <div className='tileContainer'>
        <div className="logoContainer">
          <img src={stock.grid.data.main_thumb} alt="img"></img>
        </div>
        <div className='stockBasicInfo'>
          <div className='stockName text'>{stock.name}</div>
          <div className='text'>{stock.unique_symbol}</div>
          <Chart score={stock.score.data} />
          <div className='text-center text'>{stock.score.data.sentence}</div>
        </div>
      </div>
    </StyledTile>
  )
}

export default Tile
