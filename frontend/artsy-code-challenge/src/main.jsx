import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar'
import './mainStyle.css'
import HomePage from './pages/Home'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)


function App() {
  return (
    <div className="AppClass">
      <Navbar />
      
      {/* Add Routing Functions */}
      <HomePage/>
    </div>
  )
}