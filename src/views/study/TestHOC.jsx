import React from 'react'
import {Comment,RoleHoc,ThemeHoc} from '@/utils/'

@ThemeHoc
@Comment
@RoleHoc

class TestHOC extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		let {list,userinfo}=this.props
		return (
			<div>
				<h2>测试告诫组件爱你</h2>
				<hr/>
				{
					list.map(elem=>(
						<div key={elem.id}>
							<span>{elem.id}</span>
							<span>-----</span>
							<span>{elem.content}</span>
							{
								userinfo.role===1 && [<span key='1'>-----</span>,<span key='2'>删除</span>]
							}
						</div>
					))
				}
			</div>
		)
	}
}

export default TestHOC
