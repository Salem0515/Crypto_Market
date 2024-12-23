import React from 'react'
import './Balance.css'
import table from '../../Assets/Table.png'
const Balance = () => {
  return (
    <div className='Balance'>
      <div className="top_half">
      <h1>Balancing <br /> Crypto Markets</h1>
      <p>Our fully automated proprietary quantitative trading software provides 24/7 liquidity to 170+ crypto assets across 25+ centralized spot and derivative crypto exchanges.</p>
      <button className='touch'>Get in touch</button>
      </div>

      <div className="buttom_half">
        <h1>About Gravity Team</h1>
        <p>At Gravity Team, we are on the mission to balance the supply and demand across crypto markets worldwide. We are a crypto native market maker founded by traders, developers, and innovators who are strong believers and supporters of the future of decentralization and digital assets.</p>
        <img src={table} alt="" />
      </div>
    </div>
  )
}

export default Balance
