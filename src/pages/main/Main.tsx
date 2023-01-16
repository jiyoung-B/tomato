import React from 'react'
import Card from './Card'
import datas from './datas/data'
import Header from './Header'
import "./main.css"


const Main = () => {
  
  return (
    <div className='main-container'>
      <Header/>
      <div className='flex flex-row justify-center align-center' >
      {datas.map((data,idx)=><Card data={data} key={"card"+idx}/>)}

      </div>

    </div>
  )
}

export default Main