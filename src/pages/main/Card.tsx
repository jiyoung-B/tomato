import React from 'react'
import url from "./bangkok.png"
import datas from './datas/data'

interface IPros{
  data:{
    user:{id:string,url:any,address:string},
    contents:{title:string,content:string,url:any,price:string,interest:number,chat:number}
  }
 
}


const Card:React.FC<IPros> = ({data}) => {

//   const {title} =data.contents
// console.log(title)
// let newTitle
// if(title.length>14){
//    newTitle=title.substring(0,14)+"..."
// }else{
//    newTitle=title
// }


  return (
    <div className='item'>
      <img className='photo' src={data.contents.url}></img>

      <div className='card-content'>
        <h2 className='title'>{data.contents.title}</h2>
        <div className='price'>{data.contents.price}</div>
        <div className='address'>{data.user.address}</div>

        <div className='card-count'>
          <span className='interest'>관심 {data.contents.interest}</span> 
          <span>&nbsp;</span>
          <span className='chat'>채팅 {data.contents.chat}</span>
        </div>
      </div>
      
    </div>
  )
}

export default Card