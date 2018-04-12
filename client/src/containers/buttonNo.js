import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import './buttonNo.css'
import {randomImage} from '../actions/randomImage'

class ButtonNo extends PureComponent {

  unlike() {

    this.props.dispatch(randomImage())

  }

  render() {
    return (
      <div>
        <button className="buttonNo" type="button" onClick={() => this.unlike()}><i class="fas fa-times"></i></button>
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
     showImage: state.randomImage.message
   }
}

export default connect(mapStateToProps)(ButtonNo)
