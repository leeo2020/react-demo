import React,{Component} from 'react'

export default class TestList extends Component{
	constructor(props){
		super(props)
		this.state={
			num:0,
			list:[
				{id:1,name:'张飞',age:28},
				{id:2,name:'关羽',age:29},
				{id:3,name:'刘备',age:31}
			]
		}
	}
	rowChange(e,idx){
		console.log(idx,e.target.checked)
		this.setState(state=>{
			state.list[idx].checked=e.target.checked
			return {
				list:state.list
			}
		})
	}
	rowClick(e,elem) {
		console.log("")
	}
	renderList(){
		let {list}=this.state
		list.map(elem=>(
			elem.age+=elem.id*10
		))
		return list.map((elem,idx)=> {
			return <div key={idx}>
				<span>{elem.id}</span>
				<span>--</span>
				<span>{elem.name}</span>
				<span>--</span>
				<span>{elem.age}</span><br/>
			</div>
		})
	}

	renderList2(){
		let {list}=this.state
		let arr=[]

		list.map((elem,idx)=> {
			elem.check=elem.checked||false
			arr.push (
				<div key={idx}>
				<input type="checkbox" checked={elem.checked} onChange={(e)=>this.rowChange(e,idx)}/>
				<span>{elem.id}</span>
				<span>--</span>
				<span>{elem.name}</span>
				<span>--</span>
				<span>{elem.age}</span><br/>
				<button onClick={(e)=>this.rowClick(e,elem)}>操作</button>
			</div>)
	})
		return arr
	}

	render(){
		return (
			<div>
				{this.renderList()}
				<hr/>
				{this.renderList2()}
			</div>
		)
	}
}
