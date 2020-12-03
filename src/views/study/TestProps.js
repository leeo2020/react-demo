import React,{Component} from 'react'
const elemArr=[<div key={1}>1</div>,<div key={2}>2</div>,<div key={3}>3</div>,<div key={4}>4</div>]
class TestProps extends React.Component{
	constructor(props){
		super(props)
		this.state={
			msg:'hello state'
		}
	}
	render(){
		let {msg}=this.state
		let {msgx,bol,arr,ele}=this.props

		return (
			<div>
				<h2>测试</h2>
				<hr />
				{/*吧state渲染到页面上*/}
				{this.state.msg}
				{msgx}
				{bol}
				{arr}
				{elemArr}
				{ele}
				{
					true && elemArr.map((el,idx)=>
				{
					return <div key={idx}>{el}</div>
				})
				}
			</div>

		)
	}
}
// <div key={idx}>{el}</div>)
export default TestProps
