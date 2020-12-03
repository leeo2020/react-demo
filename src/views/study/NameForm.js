import React from 'react'

class NameForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: '',
      text: '',
      select: 'grapefruit'
    }

    // this.handleChange = this.handleChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event, key) {
    this.setState({ [key]: event.target.value })
    console.log(this.state[key],event.target.value)
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(prevProps,prevState,snapshot)
  }

  handleSubmit (event) {
    alert('提交的名字: ' + this.state.value + '----' + this.state.text + '----' + this.state.select)
    event.preventDefault()
  }

  render () {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <label>
          名字:
          <input type='text' value={this.state.value} onChange={(e) => this.handleChange(e, 'value')} />
          <textarea value={this.state.text} onChange={e => this.handleChange(e, 'text')} />
        </label>
        <label>
          选择你喜欢的风味:
          <select value={this.state.select} onChange={(e) => this.handleChange(e, 'select')}>
            <option value='grapefruit'>葡萄柚</option>
            <option value='lime'>酸橙</option>
            <option value='coconut'>椰子</option>
            <option value='mango'>芒果</option>
          </select>
        </label>
        <input type='submit' value='提交' />
      </form>
    )
  }
}

export default NameForm
