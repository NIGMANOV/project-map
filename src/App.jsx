import React from 'react'
import Header from './components/Header/Header'
import Map from './components/Map/Map'
import Search from './components/Search/Search'
import './App.scss'

const App = () => {
  return (
    <div>
      <Header  />
      <Search />
      <Map />
    </div>
  )
}

export default App
