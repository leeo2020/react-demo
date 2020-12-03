import React from 'react'
import {useState,useEffect} from 'react'
import {inject,observer} from "mobx-react";

export default inject('store')(observer( props=>{
	let [task,setTask]=useState('')
	let {todo}=props.store
	function confirm(e){
		if(e.keyCode===13){
			todo.addTask(task)
			setTask('')
		}
	}
	return (
		<div>
			<h2>todo单</h2>
			<hr/>
			<input type="text"
						 value={task}
						 onChange={e=>(setTask(e.target.value))}
						 onKeyUp={e=>confirm(e)}
			/><br/>
			{todo.list.map(elem=>(
				<div key={elem.id}>
					<span>{elem.id}</span>
					<span>---------</span>
					<span>{elem.content}</span>
					<span>-----****----</span>
					<span onClick={()=>todo.delTask(elem.content)}>删除</span>
				</div>
				)
			)}
			<span>一共有{todo.total}条任务</span>
		</div>
	)
}))
