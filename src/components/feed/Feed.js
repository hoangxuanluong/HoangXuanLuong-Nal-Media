import React from 'react'
import './feed.css'
import LastestNews from '../lastestNews/LastestNews'
import PopularNews from '../popularNews/PopularNews'
import Tags from '../tags/Tags'

export default function Feed() {
  return (
    <div className='feed'>
      <div className='feedLeft'>
        <LastestNews />
      </div>
      <div className='feedRight'>
        <PopularNews />
        <Tags />
      </div>
    </div>
  )
}
