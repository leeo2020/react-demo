import React from 'react'

const ThemeCtx=React.createContext()

const themes={
	light:{
		color:'#000000',
		background:'#cccccc'
	},
	dark:{
		color:'#ffffff',
		background:'#222222'
	}
}
export default ThemeCtx
// export {themes}
