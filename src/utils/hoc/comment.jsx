import React from 'react'

function Comment(WrappedComponent){
	return class extends React.Component{
		constructor(props){
			super(props)
			this.state={
				commentList:[]
			}
		}
		componentDidMount() {
			const res=[
				{ id: 1, content: '你好棒1', user: 'zhangsan' },
				{ id: 2, content: '你好棒2', user: 'zhangsan' },
				{ id: 3, content: '你好棒3', user: 'zhangsan' },
				{ id: 4, content: '你好棒4', user: 'zhangsan' },
				{ id: 5, content: '你好棒5', user: 'zhangsan' }
			]
			this.setState({
				commentList:res
			})
		}

		render(){
			let {commentList}=this.state
			let list =commentList
			return (
				<div>
					<WrappedComponent {...this.props} list={commentList} />
				</div>
			)
		}
	}
}
export default Comment
