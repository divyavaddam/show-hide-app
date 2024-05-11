// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {
    firstName: false,
    lastName: false,
  }

  onFirstNameButtonClick = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  onLastNameButtonClick = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state
    return (
      <div className="bg-container">
        <div className="content">
          <h1 className="heading">Show/Hide</h1>
          <div className="btn-container">
            <div className="button-container">
              <button
                className="button button-1"
                type="button"
                onClick={this.onFirstNameButtonClick}
              >
                Show/Hide Firstname
              </button>
              {firstName && (
                <div className="name-container">
                  <p className="name">Joe</p>
                </div>
              )}
            </div>
            <div className="button-container">
              <button
                className="button button-2"
                type="button"
                onClick={this.onLastNameButtonClick}
              >
                Show/Hide Lastname
              </button>
              {lastName && (
                <div className="name-container">
                  <p className="name">Jonas</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
