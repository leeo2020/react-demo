import React from 'react'

const QLiftA=(props)=>{
	return (
		<div>
		<h2>Child A</h2>
			<p>{props.num}</p>
			<button onClick={()=>props.onChange(5)}>加5</button>
		</div>
	)
}

function QLiftB(props){
	return (
		<div>
			<h2>Child B</h2>
			<p>{props.num}</p>
			<button onClick={()=>props.onChange(10)}>加10</button>
		</div>
	)
}

class Qlift extends React.Component{
	constructor(props){
		super(props)
		this.state={
			num:0
		}
	}

	render(){
		let {num}=this.state
		return (
			<div>
				<QLiftA
					num={num}
					onChange={(step)=>this.setState(state=>({num:state.num+step}))}
				/>
				<QLiftB
					num={num}
					onChange={(step)=>this.setState(state=>({num:state.num+step}))}
				/>
			</div>
		)
	}
}

export default Qlift
