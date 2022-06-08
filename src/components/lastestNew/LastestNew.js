import React from 'react'
import './lastestNew.css'

export default function LastestNew({ post }) {
  return (
    <div className='lastestNew'>
      <div className='lastestNewImg'>
        <img src={post.image} alt='' />
      </div>
      <div className='lastestNewContent'>
        <div className='lastestNewCategory'>{post.category_name}</div>
        <div className='lastestNewTitle'>{post.title}</div>
        <div className='lastestNewCreatedAt'>
          {`${post.date} by ${post.author}`}
        </div>
        <div className='lastestNewDesc'>{post.content}</div>
      </div>
    </div>
  )
}
