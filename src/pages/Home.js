import React from 'react'
import Header from '../components/header/Header'
import Topbar from '../components/topbar/Topbar'
import Feed from '../components/feed/Feed'
import Footer from '../components/footer/Footer'
import NewHostPosts from '../components/newHostPosts/NewHostPosts'

export default function Home() {
  return (
    <div className='home'>
      <Topbar />
      <Header />
      <NewHostPosts />
      <Feed />
      <Footer />
    </div>
  )
}
