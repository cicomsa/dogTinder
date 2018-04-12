import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './buttonYes.css'
import { randomImage } from '../actions/randomImage'



class ButtonYes extends PureComponent {
   
like() {
	this.props.dispatch(randomImage())    
    
    }

    render() {
	     return(
	        <div>
	             <button className="buttonYes" onClick ={() => this.like()}><i class="fas fa-heart"></i></button>
          </div>
	       )
    }
}

const mapStateToProps = function (state) {

    return {
	showImage: state.randomImage.message
    }
}
export default connect(mapStateToProps)(ButtonYes)
