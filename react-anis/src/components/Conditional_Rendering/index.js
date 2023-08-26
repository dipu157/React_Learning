import React, { Component } from 'react'
import LoginPage from './LoginPage'
import HomePage from "./HomePage";


class ConditionalRendering extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false,
      }
    }

  render() {

    const { isLoggedIn } = this.state;
    let element;

    if(isLoggedIn){
        element =  <HomePage />
    }else{
        element = <LoginPage />
    }

    return(
        <div>
            {element}
        </div>
    )
  }
}

export default ConditionalRendering
