// src/components/swippingPages.js
import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import './swippingPage.css'

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
          {this.props.src}
        </div>

        <div className="buttons">
          <button className="buttonNo"><i class="fas fa-times"></i></button>
          <button className="buttonYes"><i class="fas fa-heart"></i></button>
        </div>

      </div>
    )
  }
}

export default SwippingPage
