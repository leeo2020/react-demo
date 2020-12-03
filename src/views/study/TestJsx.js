import React from 'react'

import img from '@/utils/img.js';
const wd='jsx'

const elem1=<div className={wd}>吃饭了吗？</div>
const elem2=<div>{Math.random()}</div>
const elem3=<div>{elem1}{elem2}</div>
const elem4=()=><div>{elem3}</div>
const elem5=()=>{
	return elem4()
}
const elem6=React.createElement(
	'div',
	{className:'jsx',title:'hhh',id:'box'},
	'Hello Your friend！'
)

console.log(elem1,elem2,elem3,elem4,elem5,elem6)
class Elem2 extends React.Component{
	render(){
		return (
			<div>
				{elem1}
				{elem2}
				{elem3}
				{elem4()}
				<img src={img.logo} alt=""/>
				{elem5()}
				{elem6}
			</div>
		)
	}
}

export default ()=>{
	return (
		<div>
			{elem1}
			{elem2}
			{elem3}
			{elem4()}
			<img className="img" src={img.logo} alt=""/>
			{elem5()}
			{elem6}
			<hr/>
			{true && elem1}
			{false && elem2}
		</div>
	)
}

