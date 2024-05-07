import React from 'react'
import ReactDOM from 'react-dom/client'

import Statement from './components/Statement'
import Contact from './components/Contact'
import Education from './components/Education'
import Skills from './components/Skills'
import Experience from './components/Experience'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Statement />
    <Contact />
    <Education />
  </React.StrictMode>,
)
