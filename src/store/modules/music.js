import {
	observable,
	makeObservable,
	action
} from 'mobx'
import {fetchQqMusic} from "../../utils/api";

export default class MusicStore {
	constructor() {
		makeObservable(this, {
			list: observable,
			fetchMusic: action,
			total: observable,
			singer:observable
		})
	}
	singer=''
	list = []
	total=0
	fetchMusic(payload) {
		fetchQqMusic(payload).then(res => {
			this.list = res.song.list? res.song.list:[]
			this.total=res.song.totalnum
			this.singer=res.keyword
			console.log(res,this.singer)
		})
	}
}
