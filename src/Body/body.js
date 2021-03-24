import Register from './Register';
import Login from './Login';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import {Container,Row,Col} from 'react-bootstrap';
import jobAdd from './jobAdd';
import showAllJob from './showAllJob';
import updateJob from './updateJob';
const {Component}=require("react");




class Body extends Component {
  

    render() {
        return(
          <Container>
            
              <Route path='/register' component={Register} />
              <Route path='/login' component={Login} />
              <Route path='/jobAdd' component={jobAdd} />
              <Route path='/showAllJob' component={showAllJob} />
              <Route path='/updateJob' component={updateJob} />
              

          </Container>


        )
    }

}

export default Body;