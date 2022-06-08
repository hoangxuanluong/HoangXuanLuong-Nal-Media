import React from 'react'
import './popularNew.css'

export default function PopularNew({ post }) {
  return (
    <div className='popularNew'>
      <div className='popularNewImg'>
        <img src={post.image} alt='' />
      </div>
      <div className='popularNewContent'>
        <div className='popularNewCategory'>{post.category_name}</div>
        <div className='popularNewTitle'>{post.title}</div>
      </div>
    </div>
  )
}
