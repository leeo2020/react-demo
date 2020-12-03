import React from 'react'
function BoilingVerdict (props) {
  if (props.celsius >= 100) {
    return <p>The water is boil</p>
  }
  return <p>the Water would not boil</p>
}

class Calculator extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      temperature: ''
    }
  }

  handleChange (e) {
  	console.log(e.target.value)
    this.setState({
      temperature: e.target.value
    })
  }

  render () {
    const { temperature } = this.state
    return (
      <fieldset>
        <legend>Enter Temperature in Celsius:</legend>
        <input
          value={temperature}
          onChange={(e) => this.handleChange(e)}
        />
        <BoilingVerdict celsius={temperature} />
      </fieldset>
    )
  }
}

export default Calculator
