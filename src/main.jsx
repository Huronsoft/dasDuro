import React from 'react'
import ReactDOM from 'react-dom/client'
import {Context_navbar_sup} from './context/Context_navbar_sup.jsx'
import {RouterProvider} from 'react-router-dom' // contiene el pach que quiero mostrar 
import router from './Router.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context_navbar_sup>
      <RouterProvider  router={router}/>
    </Context_navbar_sup>
  </React.StrictMode>,
)
