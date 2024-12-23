import React from 'react'
import './Partners.css'
import small_blob from '../../Assets/small_blob.png'
import infint from '../../Assets/infint.png'
import mena from '../../Assets/mena.png'
import solana from '../../Assets/solana.png'
import list_apps from '../../Assets/list_apps.png'
import right_arrow from '../../Assets/right_arrow.png'
import left_arrow from '../../Assets/left_arrow.png'
import seg from '../../Assets/seg.png'



const Partners = () => {
  return (
    <div>
        <img className='small_blob' src={small_blob} alt="" />
      <div className="partners">
      <div className="lefty">
  <div className="grid-container">
    <img className="infint" src={infint} alt="Infint Logo" />
    <img className="mena" src={mena} alt="Mena Logo" />
    <img className="solana" src={solana} alt="Solana Logo" />
  </div>
  <h1>
    Our Partners <br /> & Friends
  </h1>
</div>
        <div className="righty">
          <img src={list_apps} alt="" />
        </div>
      </div>
      <div className="texty">
        <h1>We are in a good company</h1>
        <p>Our partnerships have delivered great value to our projects and <br /> we’re happy to share some of their feedback below</p>
        <div className="imgy">
          <img src={left_arrow} alt="" />
          <img src={right_arrow} alt="" />
        </div>
        <p>Since 2019, Gravity team has been an astounding <br />market maker for Bitkub. They have proven themselves <br /> to be one of the most consistent, committed and <br />driven market makers on our exchange. Gravity Team <br /> has contributed high-quality volume and has proven to <br />be very reliable and trustworthy partner. We strongly <br />advocate Gravity Team as they have been an <br />indispensable part of our market-making team.</p>
        <span>Atthakrit Chimplapibul</span>
        <div className="segneture">
          <p>Co-founder & CEO of Bitkub</p> <hr className='separator ' /> <img src={seg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Partners
