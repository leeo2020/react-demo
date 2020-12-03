import React from 'react'
//父传子通信，可以传任何类型数据
//子传父通信，通过自定义事件

function QLang(props){
	let {list,onChange,lang,value}=props
	function langClick(ele, e) {
		console.log('lang clicked', e.target.value)
		// 调用父组件传递过来的自定义事件
		e.target.value = ele.lang
		console.log("Hello ",ele.lang)
		onChange(e)
	}

	return (
		<div>
			{
				list.map(elem=>{
					return <span key={elem.id}
					onClick={(e)=>langClick(elem,e)}
					className={value===elem.lang_zh?'on':''}
					>{elem.lang_zh}</span>
				})
			}
		</div>
	)
}

export default class TestLang extends React.Component{
	constructor(props){
		super(props)
		this.state={
				langList: [
					{ id: 1, lang_zh: '中文', lang: 'zh' },
					{ id: 2, lang_zh: '英文', lang: 'en' },
					{ id: 3, lang_zh: '日语', lang: 'jp' },
					{ id: 4, lang_zh: '法语', lang: 'fr' },
					{ id: 5, lang_zh: '韩语', lang: 'kr' }
				],
				lang: 'zh'
			}
		}
	langChange(e){
		console.log(e.target.value)
	}
	render(){
		let {langList,list}=this.state
		return (
			<div>
				<QLang list={langList} value='zh' onChange={(e)=>this.langChange(e)}/>
			</div>
		)
	}
}


