import React, { useState, useEffect } from 'react'
import MusicRow from './MusicRow'
import {observer,inject} from "mobx-react";
import '@/assets/sass/music.scss'

const MusicList = props => {
  let {music}=props.store
  let n=10
  // console.log('musdiv',music)
  const [singer, setSinger] = useState('')
   let  [page,setPage]=useState(1)
  // useEffect(() => {
  //   // const res = [
  //   //   { id: 1, name: '千里之外' },
  //   //   { id: 2, name: '东风破' },
  //   //   { id: 3, name: '莫吉托' }]
  //   // setList(res)
  //   return undefined
  // }, [])
      useEffect(()=>{
        pageShow()
        return undefined
      },[page])

  function pageChange(key){
    if(key==='prev'){
      page=(--page>0)?page:++page
    }else{
      page=(++page<=Math.ceil(music.total/n))?page:--page
    }
    setPage(page)
    console.log('idx',page,'max',Math.ceil(music.total/10))
    pageShow(page)
  }
  function fetchSongs(e){
    e.preventDefault()
    let str='ct=24&qqmusic_ver=1298&new_json=1&remoteplace=txt.yqq.center&searchid=46980701704825430&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=1&n=10&w=%E5%91%A8%E6%9D%B0%E4%BC%A6&g_tk_new_20200303=5381&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0'
    let params={}
    str.split('&').map(elem=>{
      params[elem.split('=')[0]]=elem.split('=')[1]
    })
    params.w=singer
    if(e.keyCode===13){
      setSinger('')
     music.fetchMusic(params)
    }
  }
  function pageShow(idx){
    let str='ct=24&qqmusic_ver=1298&new_json=1&remoteplace=txt.yqq.center&searchid=46980701704825430&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=1&n=10&w=%E5%91%A8%E6%9D%B0%E4%BC%A6&g_tk_new_20200303=5381&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0'
    let params={}
    str.split('&').map(elem=>{
      params[elem.split('=')[0]]=elem.split('=')[1]
    })
    params.w=music.singer
    params.p=idx
    music.fetchMusic(params)
  }

  return (
    <div>
      <h2>音乐列表</h2>
      <span>请输入搜索词：</span><input type="text"
             value={singer}
             onChange={e=>setSinger(e.target.value)}
             onKeyUp={e=>fetchSongs(e)}
      />
      <hr/>
      {
				 music.list.map(elem => (
            <MusicRow key={elem.id} music={elem} />
				 )
				 )
			}
			<p>
			<button onClick={()=>pageChange('prev')}>上一页</button>
      <span>当前第{page}页</span>
      <button onClick={()=>pageChange('next')}>下一页</button>
      </p>
			{/*<h1>{store.msg}</h1>*/}
      {/*<button onClick={()=>store.changeMsg('红红大火火')}>store修改msg</button>*/}
    </div>
  )
}
export default inject('store')(observer(MusicList))
