import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <div className='footer'>
      <img
        src='https://res.cloudinary.com/dahxl1611/image/upload/v1654599655/nal/logo-NAL_nn8w2p.jpg'
        alt=''
        className='image'
      />
      <div className='footerDesc'>
        <div className='footerTitle'>
          NAL MEDIA ベトナムオフショア開発にまつわる情報を提供します
        </div>
        <div className='footerContent'>
          このサイトは、ベトナムにおけるオフショア開発の状況、ベトナムと日本の協力関係、およびテクノロジーに関する最新のニュースを更新し、NALの人々とお客様のストーリーを投稿しております。
        </div>
        <div className='footerAddress'>
          住所：3F, 84 Duy Tân, Cầu Giấy, Hà Nội, Việt Nam
        </div>
        <div className='footerEmail'>Email: info@nal.vn</div>
        <div className='footerPhone'>Phone: (+84)243-787-8654</div>
      </div>
    </div>
  )
}
