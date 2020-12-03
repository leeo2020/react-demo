import React from 'react'
import ThemeCtx from '@/utils/Theme';

export default function themeHoc(WrappedComponent) {
	return class extends React.Component {
		render() {
			const {color,background} = this.context
			return (
				<ThemeCtx.Consumer>
					{(value) => (
						<div style={{color: value.color, background: value.background}}>
							<WrappedComponent {...this.props} />
						</div>
					)
					}
				</ThemeCtx.Consumer>
			)
		}
	}
}
