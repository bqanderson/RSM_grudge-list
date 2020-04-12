import React from 'react'
import ReactDOM from 'react-dom'

import { GrudgeProvider } from './GrudgeContext'
import App from './App'
import './styles.css'

ReactDOM.render(
  <GrudgeProvider>
    <App />
  </GrudgeProvider>,
  document.getElementById('root')
)
