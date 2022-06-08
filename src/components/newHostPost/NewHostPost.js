import React from 'react'
import './newHostPost.css'

export default function newHostPost({ post }) {
  return (
    <div className='newHostPost'>
      <div className='newHostPostWrapper'>
        <img className='newHostPostImg' src={post.image} alt='' />
        <div className='newHostPostContents'>
          <div className='newHostPostCategory'>{post.category_name}</div>
          <div className='newHostPostContent'>
            <div className='newHostPostTitle'>{post.title}</div>
            <div className='newHostPostDesc'>{post.content}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
