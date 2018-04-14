import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import './buttonYes.css'
import { randomImage } from '../actions/randomImage'
import { concatImages } from '../actions/concatImages'
import { updatePreferences} from "../actions/updatePreferences";
import { fetchUser } from "../actions/fetchUser"

const userId = 1

class ButtonYes extends PureComponent {

  like() {
    this.props.updatePreferences(userId)
    this.props.randomImage()
    this.props.concatImages()
    this.props.fetchUser(2)
  }
  render() {
    //let im = this.props.images
    //let doggyLover = im.length
     return(
      <div>
       <button className="buttonYes" onClick ={() => this.like()}><i className="fas fa-heart"></i></button>
      </div>
      )
  }
}

const mapStateToProps = function (state) {

    return {
       showImage: state.randomImage,
       images: state.concatImages,
       fetch:state.fetchUser
     }
}
export default connect(mapStateToProps, {updatePreferences, concatImages, fetchUser, randomImage})(ButtonYes)
