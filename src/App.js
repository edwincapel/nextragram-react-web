import React,{Component} from 'react';
import axios from 'axios'
import './App.scss';
import { Switch, Route } from 'react-router-dom';

import Navbar from './containers/Navbar'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount(){
    axios.get('https://insta.nextacademy.com/api/v1/users')
    .then(result => {
      this.setState({
        users: result.data
      })
    })
    .catch(error => {
      console.log('ERROR: ', error)
    })
  }

  render(){
    const {users} = this.state

    return (
      <>
        <Navbar />
        <Switch>
          <Route exact 
            path="/"
            render={props => 
              <HomePage 
                {...props}
                users = {users}
              />
            }
          />
        </Switch>
      </>
    )
  }
}

export default App;
