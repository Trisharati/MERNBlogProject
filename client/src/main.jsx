import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Store } from './redux/Store.jsx'
import { Provider } from 'react-redux'


ReactDOM.createRoot(document.getElementById('page-top')).render(
  <Provider store={Store}>
    <App/>
    
    
  </Provider>
    

)
