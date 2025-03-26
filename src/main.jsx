import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { QuestionContextProvider } from './Components/Context/answersContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QuestionContextProvider>
    <App />
    </QuestionContextProvider>
  </React.StrictMode>,
)
