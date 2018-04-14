import React, {PureComponent} from 'react'
import './swippingPage.css'
import RandomImage from '../containers/randomImage'
import ButtonNo from '../containers/buttonNo'
import ButtonYes from '../containers/buttonYes'
import { users } from './users'

class SwippingPage extends PureComponent {

  render() {
    return (
      <div className="tinder">
        <div className="homepage">

          <div className="navigation">
            <i className="fas fa-paw"></i>
           <img src="../dog.png" className="App-logo" alt="logo" />
           <i className="fas fa-comments"></i>
          </div>

          <div className="card">
            <RandomImage/>
          </div>

          <div className="buttons">
            <ButtonNo/>
            <ButtonYes/>
          </div>

        </div>

        <div className="matchesPage">

          <div className="navigation">
            <img src="../dog.png" className="App-logo" alt="logo" />
            <i className="fas fa-comments"></i>
          </div>

          <div className="newMatches">

            <div className="header">
              <i className="fas fa-arrow-left"></i>
              <p> MATCHES </p>
            </div>

            <div className="ranking">
              <ul>
              {users.sort((a, b) => b.likes - a.likes).map( user =>
              <li>{user.name} {user.likes}</li>)}
              </ul>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default SwippingPage
