import { useState, useEffect } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import RootLayout from './RootLayout'
import NotFound from './pages/NotFound'
import Landing from './pages/Landing'
import ContactCard, { createAction } from './components/ContactCard'
import Build from './pages/Build'
import Builder from './pages/Builder'
import Quote1 from './pages/Quote1'
import Quote2 from './pages/Quote2'
import Quote3 from './pages/Quote3'
import QuoteSubmitted from './pages/QuoteSubmit'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="home" element={<Landing />} />
      <Route path="landing" element={<Landing />} action={createAction}/>
      <Route path="/" element={<Navigate to="landing"/>} />
      <Route path='contactcard' element={<ContactCard />} />
      <Route path="about" element={<About />} />
      <Route path="build" element={<Build />} />
      <Route path="builder" element={<Builder />} />
      <Route path="repair" element={<Navigate to="/repair/quote-1"/>} />
      <Route path="repair/quote-1" element={<Quote1 />} />
      <Route path="repair/quote-2/:id" element={<Quote2 />} />
      <Route path="repair/quote-3/:id" element={<Quote3 />} />
      <Route path="repair/quote-submit/:id" element={<QuoteSubmitted />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
