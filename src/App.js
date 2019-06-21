import React,{Component} from 'react';
import axios from 'axios'
import './App.scss';
import Users from './components/Users'
import { 
  Container
} from 'reactstrap';

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
        <Container fluid className="h-100">
          {
            users.map((user, index) => 
              <Users key={index} user={user}/>
            )
          }
        </Container>
      </>
    )
  }
}

export default App;
