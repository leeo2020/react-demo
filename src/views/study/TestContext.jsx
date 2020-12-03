import React from 'react'
import ThemeCtx from '@/utils/Theme';

// export default class TestContext extends React.Component {
// 	render() {
// 		console.log('this.context', this.context)
// 		console.log('props', this.props)
// 		const {color, background} = this.context
// 		console.log(color, background)
// 		return (
// 			// 第一种写法
// 			<ThemeCtx.Consumer>
// 				{
// 					(value) => (
// 						<div style={{color: value.color, background: value.background}}>
// 							<h2>在那遥远的地方，有一位好姑娘!</h2>
// 						</div>
// 					)
// 				}
// 			</ThemeCtx.Consumer>
// 		)
// 	}
// }


 class TestContext extends React.Component{
	render(){
		console.log('this.context', this.context)
		console.log('props', this.props)
		const {color,background} = this.context
		console.log(color,background)
		return (
		<div style={{color,background}}>
			{ this.context && <h2>测试好好干大口大口大风大浪大口大口都看得到</h2>}
		</div>
		)
	}
}
TestContext.contextType=ThemeCtx
export default TestContext
