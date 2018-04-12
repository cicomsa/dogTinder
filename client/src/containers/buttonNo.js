import React, {PureComponent} from 'react'
import './buttonNo.css'

class ButtonNo extends PureComponent {
  unlike() {
    console.log('test')
  }

  render() {
    return (
      <div>
        <button className="buttonNo" type="button" onClick={() => this.unlike()}><i class="fas fa-times"></i></button>
      </div>
    );
  }
}

export default ButtonNo;
