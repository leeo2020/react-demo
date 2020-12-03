import React from 'react'

class TestRender extends React.Component{
	constructor(props){
	 super(props)
		this.state={
				num:0,
				show:true,
				className:'d0',
				d1:'d1',
				d0:'d0'
			}
	}
	countPlus(){
		this.setState(state=>{
			return {
				num:++state.num
			}
		})
	}
	showToggle(){
		this.setState(state=>{
			return {
				show:!state.show
			}
		})
	}
	classChange(){
		this.setState(state=>{
			return {
				className:state.d0?state.d1:state.d0
			}
		})
	}
	render(){
		let {num,show,className}=this.state
		console.log(className,'d0'?'d1':'d0')
		return (
			<div>
				<h1 style={this.props.style}>{num}</h1>
				<button onClick={()=>this.countPlus()}>自增</button>
				{ show &&　<h2>我若隐若现</h2>}
				<button onClick={()=>this.showToggle()}>{show?'我隐藏':'我显示'}</button>
				<h2 className={className}>classNametoggle显隐</h2>
				<button onClick={()=>this.classChange()}>类切换</button>
			</div>
		)
	}
}

export default TestRender
