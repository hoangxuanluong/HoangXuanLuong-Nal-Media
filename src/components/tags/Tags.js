import React from 'react'
import './tags.css'
import { LocalOffer } from '@mui/icons-material'

export default function Tags() {
  return (
    <div className='tags'>
      <div className='tagSection'>
        <div className='tagsName'>Tags</div>
        <div className='tag'>
          <LocalOffer className='tagIcon' />

          <div className='tagDesc'>ベトナム システム開発 (19 Post)</div>
        </div>
        <div className='tag'>
          <LocalOffer className='tagIcon' />

          <div className='tagDesc'>ベトナム　オフショア (17 Post)</div>
        </div>
        <div className='tag'>
          <LocalOffer className='tagIcon' />

          <div className='tagDesc'>ベトナムIT会社 (17 Post)</div>
        </div>
        <div className='tag'>
          <LocalOffer className='tagIcon' />

          <div className='tagDesc'>ベトナムシステム開発 (15 Post)</div>
        </div>
        <div className='tag'>
          <LocalOffer className='tagIcon' />
          <div className='tagDesc'>ベトナムオフショア (12 Post)</div>
        </div>
      </div>
      <div className='imageSection'>
        <img
          src='https://res.cloudinary.com/dahxl1611/image/upload/v1654599655/nal/banner-1_d4ytmi.jpg'
          alt=''
          className='imageTag'
        />
        <img
          src='https://res.cloudinary.com/dahxl1611/image/upload/v1654599655/nal/banner-2_pfetii.jpg'
          alt=''
          className='imageTag'
        />
        <img
          src='https://res.cloudinary.com/dahxl1611/image/upload/v1654599655/nal/banner-3_ywos9c.jpg'
          alt=''
          className='imageTag'
        />
      </div>
    </div>
  )
}
