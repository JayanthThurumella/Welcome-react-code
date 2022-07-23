import './index.css'
import {Component} from 'react'

class Welcome extends Component {
  state = {subscribe: false, msg: 'Subscribe'}

  buttonClick = () => {
    const {subscribe, msg} = this.state
    if (subscribe) {
      this.setState(prev => ({subscribe: false, msg: 'Subscribe'}))
    } else {
      this.setState(prev => ({subscribe: true, msg: 'Subscribed'}))
    }
  }

  render() {
    const {msg} = this.state
    return (
      <div className="bg-container">
        <h1 className="main-heading">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        <button type="button" onClick={this.buttonClick}>
          {msg}
        </button>
      </div>
    )
  }
}

export default Welcome
