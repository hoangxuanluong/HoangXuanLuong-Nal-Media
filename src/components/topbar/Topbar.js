import React from 'react'
import './topbar.css'
import { Search, LocalOffer, Language } from '@mui/icons-material'

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className='right'>
        <ul className='tagElements'>
          <li className='tagElement'>
            <LocalOffer className='icon' />
            オフショア開発
          </li>
          <li className='tagElement'>
            <LocalOffer className='icon' />
            NALブログ’, ‘ベトナム情報
          </li>
          <li className='tagElement'>
            <LocalOffer className='icon' />
            お問い合わせ
          </li>
        </ul>
      </div>
      <div className='left'>
        <Search className='iconLeft' />
        <Language className='iconLeft' />
      </div>
    </div>
  )
}
