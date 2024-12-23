import React from 'react'
import './Market.css'
import blob from '../../Assets/blob.png'
import infinty from '../../Assets/infinty.png'
import chart from '../../Assets/chart.png'
const Market = () => {
  return (
    <div>
                <img className='Blob' src={blob} alt="" />                 {/* background dont toche its jsx code or its css code  */}

    <div className='Market'>
      <h1>Crypto Market Making</h1>
      <p>We are a global crypto liquidity provider and algorithmic market maker. We trade digital assets listed on Centralized Exchanges in over 15 countries worldwide.</p>
      <div className="first_SEC">
        <div className="text">
            <h2>Market Making for Crypto Projects</h2>
            <h6>Accelerate your token’s journey by boosting its liquidity</h6>
            <p>We invest in building long-term, sustainable relationships and support our projects in their growth journey with our services, industry expertise and network.</p>
            <span>Learn more </span>
        </div>
        <img src={infinty} alt="" />
      </div>
      <div className="second_SEC">
        <img src={chart} alt="" />
        <div className="text_1">
            <h2>Market Making for Crypto Exchanges</h2>
            <h6>Attract more traders and projects with deep order books & liquidity</h6>
            <p>Our world-class market making services are proven to help local and emerging exchanges win traders and gain market-leading positions of up to 90% market dominance.</p>
            <span>Learn more</span>
        </div>
      </div>    
    </div>
    </div>
  )
}

export default Market
