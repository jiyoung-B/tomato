import React from 'react'
import datas from '../main/datas/data'


const Detail = () => {

  const data=datas[0]
  return (
    <div>
<img src={data.contents.url}/>
<div><img src={data.user.url}/><div>
  </div></div>

    </div>
  )
}

export default Detail