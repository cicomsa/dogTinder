import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {randomImage} from '../actions/randomImage'

class RandomImage extends PureComponent {

  componentDidMount() {
      this.props.randomImage();
    }

  render() {

    return (
      <div>
        <img className="randomImage" src={this.props.showImage} alt="dogImage"/>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
	return {
		showImage: state.randomImage.message
	}
}

export default connect(mapStateToProps, { randomImage })(RandomImage)
