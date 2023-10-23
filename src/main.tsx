import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


export const Main = () => {
  return (<React.StrictMode>
          <App />
        </React.StrictMode>)
  
}
ReactDOM.createRoot(document.getElementById('root') as Element).render(<Main />)
