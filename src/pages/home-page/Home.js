import React from 'react'
import Cursole from '../../components/carsole/Cursole'
import Collections from '../../components/collections/Collections'
import "./Home.css"

function Home() {
  return (
    <div id='root'>
      <Cursole/>
      <Collections/>
    </div>
  )
}

export default Home