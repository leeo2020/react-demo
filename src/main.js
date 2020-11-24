import './assets/sass/style.scss'
import './assets/css/index.css'
import img from './assets/img/liuwen.jpg'
const React = require('react')
const ReactDOM = require('react-dom')
import App from './App.jsx'

console.log('hello you!')
document.getElementById('wz').style.color = 'red'
document.getElementById('wz').style.textAlign = 'center'
document.getElementById('img').src = img
// ReactDOM.render( <h1>Hello, world!</h1>, document.getElementById('root'))
// const name = 'Josh Perez';
// const element = <h1>Hello, {name}</h1>;
// ReactDOM.render(
// 	element,
// 	document.getElementById('root')
// );
function formatName(sby) {
		return sby.firstName + ' ' + sby.lastName;
}

const user = {
	firstName: 'Harper',
	lastName: 'Perez'
};

const element = (
	<h1>
		Hello, {formatName(user)}!
	</h1>
);

ReactDOM.render(
	element,
	document.getElementById('root')
);