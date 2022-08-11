import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'

export default function DefaultLayout({children}) {
  return (
    <div>
        <NavBar />
        <main>
            {children}
        </main>
        <Footer />
    </div>
  )
}
