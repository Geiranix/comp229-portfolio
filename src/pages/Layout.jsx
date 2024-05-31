
import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Layout({children}) {
  return (
    <div className='w-[100vw] h-[100vh] flex flex-col items-center justify-between'>
      <Header />
      <main className='h-[65%] w-[100vw] bg-[#333945] overflow-scroll'>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
