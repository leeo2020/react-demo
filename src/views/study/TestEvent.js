import React from 'react'

function CountChild(props){
	return (
		<h1>{props.num}</h1>
	)
}

export default class TestEvent extends React.Component{
	constructor(props){
		super(props)
		this.state={
			num:0
		}
	}
	addHandel(){
		this.setState(function(state,props){
			return {
				num:++state.num
			}
		})
	}
	subHandel(){
		this.setState((state,props)=>(
			{
			num:state.num
			})
		)
	}
	render(){
		let {num}=this.state
		console.log(document.getElementById("num"))//渲染完成，数据get到了
		if(document.getElementById("num")){
			console.log(document.getElementById("num").innerText)//还没有跟新视图页面上，dom操作get不到
		}
		return (
			<div>
				<h1 id="num">{num}</h1>
				<CountChild num={num} ></CountChild>
				{/*ES5 bind改变this指向*/}
				<button onClick={this.addHandel.bind(this)}>加</button>
				{/*ES6 箭头函数改变this指向*/}
				<button onClick={()=>this.subHandel()}>减</button>
			</div>
		)
	}
}
