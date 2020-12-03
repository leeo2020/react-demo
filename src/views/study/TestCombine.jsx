import React,{Component} from 'react'

const LxModel=props=>{
	const LxConfirmBtn=()=>(
		<div>
			<span onClick={()=>props.onOk()} className="info">确定</span>
		</div>
	)
	const LxDeleteBtn=()=>(
		<div>
			<span onClick={()=>props.onDel()} className="delete">删除</span>
			<span>取消</span>
		</div>
	)
	const LxCancelBtn=()=>(
		<div>
			<span onClick={()=>props.onOk()}>取消</span>
		</div>
	)
	//动态渲染
	function renderBtns(){
		switch(props.type){
			case 'confirm':
				return (
					<div>
						<span onClick={()=>props.onOk()} className="info">确定</span>
						<LxCancelBtn>取消</LxCancelBtn>
						<span onClick={()=>props.onDel()} className="delete">删除</span>
					</div>
				)
				break
			case 'delete':
				return (
					<div>
						<span onClick={()=>props.onOk()} className="info">删除</span>
						<span>取消</span>
						<span onClick={()=>props.onDel()} className="delete">确定</span>
					</div>
				)
				break
			default:return(
					<div>
						<LxConfirmBtn />
						<LxCancelBtn />
					</div>
				)
				break
		}
	}
	return (
		<div className="lx-model">
			<div className="header">
				<span>{props.tip}</span>
				<span>X</span>
			</div>
			<div className="content">
				{props.children}
			</div>
			<div className="footer">
				{renderBtns()}
			</div>
		</div>
	)
}

class TestCombine extends Component{
	clickOk(){
		console.log('Ok')
	}
	clickDel(){
		console.log('Delete')
	}
	clickCan(){
		console.log('Cancel')
	}
	render(){
		return (
			<div>
			<LxModel
				type="confirm"
				tip="编辑"
				onOk={()=>this.clickOk()}
				onCan={()=>this.clickCan()}
				onDel={()=>this.clickDel()}
			>
				<span>用户名:</span><input type="text"/><br/>
				<span>密  码:</span><input type="password"/>
				<div>你确定要删除吗？</div>
			</LxModel>
			<LxModel
					type="delete"
					tip="删除"
					onOk={()=>this.clickOk()}
					onCan={()=>this.clickCan()}
					onDel={()=>this.clickDel()}
				>
					<span>用户名:</span><input type="text"/><br/>
					<span>密  码:</span><input type="password"/>
			</LxModel>
			<LxModel
					tip="确认"
					onOk={()=>this.clickOk()}
					onCan={()=>this.clickCan()}
				>
					<div>你确认要删除吗?</div>
			</LxModel>
			</div>
		)

	}
}
export default TestCombine
