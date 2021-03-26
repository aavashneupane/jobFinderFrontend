import Register from './Register';
import Login from './Login';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import {Container,Row,Col} from 'react-bootstrap';
import jobAdd from '../Components/Company/jobAdd';
import showAllJob from '../Components/Company/showAllJob';
import updateJob from '../Components/Company/updateJob';
import profile from './profile';
import aboutus from '../Components/Common/aboutus';
const {Component}=require("react");




class Body extends Component {
  

    render() {
        return(
          <Container>
            
              <Route path='/register' component={Register} />
              <Route path='/login' component={Login} />
              <Route path='/aboutus' component={aboutus} />
              <Route path='/jobAdd' component={jobAdd} />
              <Route path='/showAllJob' component={showAllJob} />
              <Route path='/updateJob' component={updateJob} />
              <Route path='/profile' component={profile} />
              

          </Container>


        )
    }

}

export default Body;