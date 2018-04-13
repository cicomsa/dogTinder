// src/components/swippingPages.js
import React, {PureComponent} from 'react'
import './swippingPage.css'
import RandomImage from '../containers/randomImage'
import ButtonNo from '../containers/buttonNo'
import ButtonYes from '../containers/buttonYes'

class SwippingPage extends PureComponent {

  render() {
    return (
      <div className="homepage">

        <div className="navigation">
          <i className="fas fa-paw"></i>
         <img src="../dog.png" className="App-logo" alt="logo" />
          <i className="fas fa-comments"></i>
        </div>

        <div className="card">
          <RandomImage/>
        </div>

        <div className="buttons">
          <ButtonNo/>
          <ButtonYes/>
        </div>

      </div>
    )
  }
}

export default SwippingPage
