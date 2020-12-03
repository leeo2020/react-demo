import React,{Component} from 'react'

export default class TestForm extends Component{
	constructor(props){
		super(props)
		this.state={
			name:'22',
			pwd:'',
			desc: '',
			level:''
		}
	}
	userInput(){
		let data={
			name:document.getElementById('name').value,
			pwd:this.refs.pwd.value
		}
		console.log(data)
	}
	getAge(e){
		console.log(e.target.value,e.target)
	}

	getValue(e,key){
		console.log(key,e.target.value)
		this.setState({
				[key]:e.target.value
		})
	}
	submitCtrlForm(){
		console.log(this.state)
	}
	render(){
		let {name,desc,level}=this.state
		let levelArr=[
			{id:1,level:'高中',level_en:'A'},
			{id:2,level:'学士',level_en:'B'},
			{id:3,level:'硕士',level_en:'C'},
			{id:4,level:'博士',level_en:'C'}
		]
	return (
		<div>
			<h2>测试form</h2>
			<hr/>
			<p>非受控表单</p>
				<span>用户名:</span><input id="name" type="text" /><br/>
				<span>密 码:</span><input ref="pwd" type="password" /><br/>
				<input type="text" onChange={(e)=>this.getAge(e)}/><br/>
				<input type="file" /><br/>
				<input type="submit" onClick={()=>this.userInput()} />
				<hr/>
				<p>受控表单</p>
				<span>用户名</span><input type="text" value={name} onChange={(e)=>this.getValue(e,'name')}/>
				<span>个人喜好</span><textarea value={desc} onChange={(e)=>this.getValue(e,'desc')} />
				<button onClick={()=>this.submitCtrlForm()}>提交受控表单</button>
				<span>选择学历</span><br/>
				<select value={level} onChange={(e)=>this.getValue(e,'select')}>
					{
						levelArr.map((elem,idx)=>{
					return <option value={elem.level_en} key={idx}>{elem.level}</option>
			})
					}
			</select>

		</div>

	)
	}
}
