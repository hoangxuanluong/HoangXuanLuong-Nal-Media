import React from 'react'
import './header.css'
import { Facebook, Google } from '@mui/icons-material'

export default function Header() {
  return (
    <div className='header'>
      <div className='logoTitle'>
        <div className='logoIcons'>
          <Facebook className='logoIcon' />
          <Google className='logoIcon' />
        </div>
        <div className='logoName'>NAL MEDIA</div>
      </div>
      <div className='logoContent'>
        ベトナムオフショア開発にまつわる情報を提供します
      </div>
      <div className='menuBar'>
        <ul className='menuBarElements'>
          <li className='menuBarElement'>オフショア開発</li>
          <li className='menuBarElement'>NALブログ’ </li>
          <li className='menuBarElement'> ‘ベトナム情報</li>
          <li className='menuBarElement'>お問い合わせ</li>
        </ul>
      </div>
    </div>
  )
}
