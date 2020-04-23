import React, { useContext } from 'react'

import Grudges from './Grudges'
import NewGrudge from './NewGrudge'
import { GrudgeContext } from './GrudgeContext'

const App = () => {
  const { undo, isPast } = useContext(GrudgeContext)

  return (
    <div className='Application'>
      <NewGrudge />
      <section style={{ marginTop: '10px' }}>
        <button disabled={!isPast} onClick={undo}>
          Undo
        </button>
        <button>Redo</button>
      </section>
      <Grudges />
    </div>
  )
}

export default App
