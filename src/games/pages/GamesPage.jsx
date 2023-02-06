import React from 'react'
import { GameCard } from '../../components/GameCard'
import Header from '../../components/Header'

const GamesPage = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <GameCard />
      </div>
    </>
  )
}

export default GamesPage