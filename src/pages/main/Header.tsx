import React from 'react'
import logo from"../assets/images/logo.png"

import"./main.css"
import"./header.css"

const Header = () => {
  return (
    <div className='nav'>
    <div className='header'><img className="img"src={logo}/></div>
    <div className='navList'>
      <ul>
        <li><a href="#">중고거래</a></li>
        <li><a href="#">동네가게</a></li>
        <li><a href="#">알바</a></li>
        <li><a href="#">부동산 직거래</a></li>
        <li><a href="#">중고차 직거래</a></li>
      </ul>
    </div>
    <div className='search'>
    <div className="navInput"><input className="inputBox" type="text" placeholder='물품이나 동네를 검색해보세요'></input><button className="navChat"type="button">채팅하기</button></div>
    <div className="clear"></div>
    </div>
    </div>
  )
}

export default Header