import React from 'react'
import PropTypes from 'prop-types'

class TestType extends React.Component{
	render(){
		let {name,age}=this.props
		return (
			<div>
				<h1>Hello,{name}---{age}</h1>
			</div>
		)
	}
}
TestType.defaultProps={
	name:'leo',
	age:20
}
TestType.propTypes={
	name:PropTypes.string.isRequired,
	age:PropTypes.number.isRequired
}
export default TestType
