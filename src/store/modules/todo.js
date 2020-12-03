import {
	observable,
	makeObservable,
	action,
	computed
} from 'mobx'

export default class TodoStore {
	constructor() {
		makeObservable(this,{
			list:observable,
			addTask:action,
			delTask:action,
			total:computed
		})
	}
	list=[]
	addTask(payload){
		this.list.push({
			id:Date.now(),
			content:payload
		})
	}
	delTask(payload){
		this.list=this.list.filter(elem=>(
			elem.content!==payload
		)
		)
	}
	get total(){
		return this.list.length
	}
}
