import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NbaBlog } from './pages/NbaBlog'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<NbaBlog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
