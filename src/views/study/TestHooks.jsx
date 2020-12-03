import React,{useState,useEffect} from 'react'
function TestHooks(props){
	let [count,setCount]=useState(0)
	useEffect(()=>{
		document.title=`You clicked ${count} times`//ComponentDidMounted
	})

	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={()=>setCount(++count)}>加一</button>
			<button onClick={()=>setCount(--count>-1?count:++count)}>减一</button>
		</div>
	)
}

export default TestHooks
