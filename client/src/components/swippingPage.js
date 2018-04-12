// src/components/swippingPages.js
import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import './swippingPage.css'
import RandomImage from '../containers/randomImage'
import ButtonNo from '../containers/buttonNo'
import ButtonYes from '../containers/buttonYes'

class SwippingPage extends PureComponent {
  static PropTypes = {
    src: PropTypes.string.isRequired
  }

  render() {
    return (
      <div className="homepage">

        <div className="navigation">
          <i class="fas fa-paw"></i>
         <img src="../dog.png" className="App-logo" alt="logo" />
          <i class="fas fa-comments"></i>
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
