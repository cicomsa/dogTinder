import React, {PureComponent} from 'react'

class ButtonNo extends PureComponent {
  unlike() {
    console.log('test')
  }

  render() {
    return (
      <div>
        <button type="button" onClick={() => this.unlike()}>NO</button>
      </div>
    );
  }
}

export default ButtonNo;
