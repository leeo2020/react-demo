import React from 'react'

export default function roleHoc(WrappedComponnet) {
	return class extends React.Component {
		constructor(props) {
			super(props)
			this.state = {
				userinfo: {}
			}
		}

		componentDidMount() {
			this.setState({
				userinfo: {
					role: 2,
					mobile: '13444444444',
					username: '小王'
				}
			})
		}
		render(){
			const {userinfo}=this.state
			return (
				<div>
					<WrappedComponnet {...this.props} userinfo={userinfo} />
				</div>
			)
		}
	}
}
