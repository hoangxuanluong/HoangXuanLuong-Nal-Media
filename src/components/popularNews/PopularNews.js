import React from 'react'
import { popularNews } from '../../data'
import PopularNew from '../popularNew/PopularNew'
import './popularNews.css'

export default function PopularNews() {
  return (
    <div className='popularNews'>
      <div className='popularNewsTag'>Popular News</div>
      <div className='popularNewsPosts'>
        {popularNews.map((post) => (
          <PopularNew post={post} />
        ))}
      </div>
    </div>
  )
}
