import React from 'react'
import './lastestNews.css'
import { lastestNews } from '../../data.js'
import LastestNew from '../lastestNew/LastestNew'

export default function LastestNews() {
  return (
    <div className='lastestNews'>
      <div className='lastestNewsTag'>Lastest News</div>
      <div className='lastestNewsPosts'>
        {lastestNews.map((post) => (
          <LastestNew post={post} />
        ))}
      </div>
    </div>
  )
}
