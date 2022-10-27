// Write your code here

import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {minutes: 0, seconds: 0}

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  incrementSeconds = () => {
    this.setState(prevState => {
      if (prevState.seconds === 59) {
        return {minutes: prevState.minutes + 1, seconds: 0}
      }
      return {seconds: prevState.seconds + 1}
    })
  }

  validatingSeconds = () => {
    this.timerId = setInterval(this.incrementSeconds, 1000)
  }

  onStopButton = () => {
    clearInterval(this.timerId)
  }

  onresetButton = () => {
    clearInterval(this.timerId)
    this.setState({minutes: 0, seconds: 0})
  }

  render() {
    const {minutes, seconds} = this.state

    const m = minutes > 9 ? minutes : `0${minutes}`
    const s = seconds > 9 ? seconds : `0${seconds}`

    return (
      <div className="bg-container">
        <div className="content">
          <h1 className="heading">Stopwatch</h1>
          <div className="card">
            <div className="top-container">
              <img
                className="watch"
                alt="stopwatch"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              />
              <h1 className="timer">Timer</h1>
            </div>
            <h1 className="time">
              {m}:{s}
            </h1>
            <div className="btn-container">
              <button
                type="button"
                className="btn btn1"
                onClick={this.validatingSeconds}
              >
                Start
              </button>
              <button
                type="button"
                className="btn btn2"
                onClick={this.onStopButton}
              >
                Stop
              </button>
              <button
                type="button"
                className="btn btn3"
                onClick={this.onresetButton}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
