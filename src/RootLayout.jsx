import React, { useRef } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import TawkMessengerReact from '@tawk.to/tawk-messenger-react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function RootLayout() {
  const location = useLocation()
  const { hash, pathname, search } = location // deconstruct location properties to use


  return (
    <div>
        <Header />
        <Outlet />
        <Footer />
        { pathname !== "/landing" ||  pathname !== "/build"  && <TawkMessengerReact propertyId="65c3674a0ff6374032ca3c01" widgetId="1hm1kmv9s"/>}
    </div>
  )
}
