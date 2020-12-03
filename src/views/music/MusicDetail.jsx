import React from 'react'
import {useParams} from 'react-router-dom'

const MusicDetail = props => {
  let {id,name}=useParams()
  console.log('useParams',id,name)
  console.log('props',props)
  return (
    <div>
      <h2>详情页</h2>
      <h3>{id}</h3>
      <h3>{name}</h3>
    </div>
  )
}

export default MusicDetail
