import React, { Component } from 'react'
import './style.css'

export default class State extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
           count : 0,
        }
      }

      hIncre = () => {
        this.setState({
            count : this.state.count +1
        })
      }

      hDecre = () => {
        this.setState({
            count : this.state.count  -1
        })
      }

  render() {
    const { count } = this.state
    return (
      <div>
        <h1>Count : {count}</h1>
        <button onClick={this.hIncre}> + </button>
        <button onClick={this.hDecre}> - </button>
      </div>
    )
  }
}
