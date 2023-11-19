import React, { useEffect, useState } from 'react'
import { Baseurl } from './baseUrl'
import Loader from './Loader'
import axios from 'axios';
import Header from './Header';
import res from "./styles/res.css"
import { Link } from 'react-router-dom';
import CoinHeader from './CoinHeader';
const Coins = () => {
  
  const [loading, setLoading]=useState(true)
  const[coins, setCoins]=useState([])
  const [currency, setCurrency]=useState('usd')
  const [search, setSearch]=useState('')
  const currencySymbol = currency ==='inr' ? '₹': '$'

  useEffect(() => {
    const getCoinsData = async () => {
      const { data } = await axios.get(`${Baseurl}/coins/markets?vs_currency=inr`);
      console.log(data);
      setCoins(data);
      setLoading(false);
    };
    getCoinsData();
  }, []);

  return (
    <>
      {
        loading? <Loader/> : <> 
         <CoinHeader /> 
           <div className="search-bar">
            <input type="text" 
            id="search-bar"
            placeholder='Search Your Coins ' 
            // style={{height:"2rem",width:'20rem',position:'absolute',top:'1%',left:"33%",paddingLeft:"5px"}}
            onChange={(e)=>setSearch(e.target.value)}
            />
           </div>
           <div className='btns' style={{padding:"5px"}}>
             <button  onClick={()=>setCurrency('inr')} >inr </button>
             <button  onClick={()=>setCurrency('usd')}>usd </button>
           </div>
          { 
            coins.filter((data)=>{
               if(data === ''){
                return data
               } else if(data.name.toLowerCase().includes(search.toLowerCase())){
                   return data
               }
            }).map((coindata, i)=>{
              return(
              <CoinCard key={i} coindata={coindata} id={coindata.id}  i={i} currencySymbol={currencySymbol}  />
              )
            })
          }
        </> 
      }
    </>
  )
}

const  CoinCard=({coindata, currencySymbol, i, id})=>{
  const profit = coindata.price_change_percentage_24h>0 
  return(
   <Link to={`/coins/${id}`} style={{color:"white", textDecoration:'none'}} >
          <div className='ex-cards'>
    <div className="image">
      <img height={"80px"} src={coindata.image} alt="" />
    </div>
    <div className="name">
        {coindata.name}
    </div>
    <div className="price">
        {currencySymbol} {coindata.current_price.toFixed(0)}
    </div>
    <div style={profit? {color:"green"} : {color:"red"}} className="rank">
         {profit ? "+" + coindata.price_change_percentage_24h.toFixed(2): coindata.price_change_percentage_24h.toFixed(2)}
    </div>
 </div>
   </Link>
   
  )
}

export default Coins
