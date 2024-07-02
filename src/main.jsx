import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import Fonts from './Fonts'
import theme from './Theme'
import ReactGA from 'react-ga4';

ReactGA.initialize("G-X5DNMCLFLB");

ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Home" });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Fonts />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
