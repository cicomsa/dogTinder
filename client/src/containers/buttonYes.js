import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import './buttonYes.css'
import { randomImage } from '../actions/randomImage'
import { randomImage1 } from '../actions/randomImage1'
import { updatePreferences} from "../actions/buttonYes";
const userId = 1;

class ButtonYes extends PureComponent {


like() {
  this.props.updatePreferences(userId)
	this.props.randomImage()
  this.props.randomImage1()
    }





    render() {
      let im = this.props.images
      let doggyLover = im.length
	     return(
	        <div>
	            <button className="buttonYes" onClick ={() => this.like()}><i className="fas fa-heart"></i></button>
              <p>{doggyLover}</p>

          </div>
	       )
    }
}

const mapStateToProps = function (state) {

    return {
	     showImage: state.randomImage,
       images: state.randomImage1
     }
}
export default connect(mapStateToProps, {updatePreferences, randomImage1, randomImage})(ButtonYes)
