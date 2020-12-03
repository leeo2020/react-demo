import React from 'react'
import {Menu, Button} from 'antd'
import routes from '@/views/'
import {NavLink} from 'react-router-dom'

const {SubMenu} = Menu

export default props => {
	const arrange = () => {
		return routes.map(elem => (
			 <SubMenu
				 key={elem.id}
				 title={elem.text}
				 icon={elem.icon}
			 >
				{elem.children && elem.children.map(ele => (
					<Menu.Item key={ele.id}>
						<NavLink
							to={ele.path}
							exact={!ele.notExact}
						>
							{ele.text}
						</NavLink>
					</Menu.Item>
				))}
			</SubMenu>
		))
	}
	return (
		<div className='sider'>
			<Menu
				mode="inline"
				theme='dark'
			>
				{arrange()}
			</Menu>
		</div>
	)
}
