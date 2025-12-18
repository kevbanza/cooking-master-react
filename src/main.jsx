import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './Header.jsx'

const root = createRoot(document.getElementById('root'));



function MyComponent(){
  return (
    <h1>Hello Component</h1>
  );
}

root.render(
  <>
    <App />
  </>,
)
/*
root.render(
  <>
    <Header />
        <MyComponent />

  </>,
)*/
