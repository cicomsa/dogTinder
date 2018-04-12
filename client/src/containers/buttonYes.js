import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './buttonYes.css'

export default class ButtonYes extends PureComponent {

  clickHandler = () => {
	   console.log("Clicked")
    }

    render() {
	     return(
	        <div>
	         <button className="buttonYes" onClick ={this.clickHandler}><i class="fas fa-heart"></i></button>
          </div>
	       )
    }
}



//export default connect(mapStateToProps)(ButtonYes)
