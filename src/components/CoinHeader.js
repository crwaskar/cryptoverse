import React from 'react'
import { Link } from 'react-router-dom'
import { FaEthereum } from "react-icons/fa"
import CoinHeaderStyle from "../components/styles/CoinHeaderStyle.css"
const CoinHeader = () => {
  return (
    <div className='navbar' >
    <div className="logo">
        <h1>CryptoVerse </h1>
        <FaEthereum color='orange' size={"25"} /> 
    </div>
  <ul>
    <li > <Link  to='/'>Home</Link></li>
  </ul>
</div>
  )
}

export default CoinHeader
