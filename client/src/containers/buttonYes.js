import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'




export class ButtonYes extends PureComponent {

      

    clickHandler = () => {
	console.log("Clicked")

    }
    
    render() {
	return(
	    <div className="ButtonYes">
	    <button onClick ={this.clickHandler}>YES</button>

		</div>
	)
    }
    }



//export default connect(mapStateToProps)(ButtonYes) 
