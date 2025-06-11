import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Header from './components/header'
import Main from './components/mainBody.jsx'


import App from './App'




import Form from './pages/form'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <Header />
    <Routes>
      <Route path="/" element={

        <>
        
        <App />
        </>
        
      } />

      <Route path="/form" element={
        <Form />
      } />
    </Routes>

  </BrowserRouter>




)
