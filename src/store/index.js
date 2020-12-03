//使用mbox定义使用一个store
import {
	observable,
	makeObservable,
	action
} from 'mobx'

import MusicStore from "./modules/music"
import TodoStore from "./modules/todo"

class Store{
	constructor(){
		this.music=new MusicStore()
		this.todo=new TodoStore()
		this.msg='Hello leo'
		makeObservable(this,{
			msg:observable,
			changeMsg:action
		})
	}

	changeMsg(payload){
		this.msg=payload
	}
}
export default new Store()
