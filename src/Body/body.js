import Register from './Register';
import Login from './Login';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import {Container,Row,Col} from 'react-bootstrap';
import jobAdd from './jobAdd';
import showAllJob from './showAllJob';
const {Component}=require("react");




class Body extends Component {
  

    render() {
        return(
          <Container>
              THis is body
              <Route path='/register' component={Register} />
              <Route path='/login' component={Login} />
              <Route path='/jobAdd' component={jobAdd} />
              <Route path='/showAllJob' component={showAllJob} />
              

          </Container>


        )
    }

}

export default Body;