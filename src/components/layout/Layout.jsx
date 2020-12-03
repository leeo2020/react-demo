import React from 'react'
import {Layout} from 'antd'
import LxHeader from './Header'
import LxSider from './Sider'
import LxMain from './Main'
import './style.scss'
const { Header, Footer, Sider, Content } = Layout;

export default props => {
	return (
		<>
			<Layout className="lx-layout">
				<Sider width="150"> < LxSider/> </Sider>
				<Layout>
					<Header><LxHeader/></Header>
					<Content> <LxMain/></Content>
				</Layout>
			</Layout>
		</>
	)
}
