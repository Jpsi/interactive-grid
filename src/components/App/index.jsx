import React, { useState, useEffect } from 'react'
import Card from '../Card'
import fetchData from  '../../utils/fetchData'

const App = () => {
  const [cards, setCards] = useState([])

  useEffect(() => fetchData(setCards), [])

  return (
    <div className="app">
      <h1>This is an interactive grid</h1>
      {cards.map(card => (
        <Card cardTitle={card.title}/>
      ))}
    </div>
  )
}

export default App
