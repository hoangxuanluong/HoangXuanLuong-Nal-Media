import React from 'react'
import './newHostPosts.css'
import NewHostPost from '../newHostPost/NewHostPost'
import { newHostPosts } from '../../data'

export default function NewHostPosts() {
  return (
    <div className='newHostPosts'>
      <div className='newHostPostLarge'>
        <NewHostPost post={newHostPosts[0]} />
      </div>
      <div className='newHostPostSmall'>
        <div className='newHostPostSmall1'>
          <NewHostPost post={newHostPosts[1]} />
        </div>
        <div className='newHostPostSmall2'>
          <NewHostPost post={newHostPosts[2]} />
        </div>
      </div>
    </div>
  )
}
