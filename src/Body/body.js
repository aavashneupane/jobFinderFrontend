import Register from './Register';
import Login from './Login';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import {Container,Row,Col} from 'react-bootstrap';
import jobAdd from '../Components/Company/jobAdd';
import showAllJob from '../Components/Company/showAllJob';
import myListings from '../Components/Company/myListings';
import myApplied from '../Components/Customer/myApplied';
import profile2 from './profile2';
import updateProfile2 from '../Components/Customer/updateProfile2';

import whoApplied from '../Components/Company/whoApplied';
import updateJob from '../Components/Company/updateJob';
import profile from './profile';
import updateProfile from '../Components/Company/updateProfile';

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
              <Route path='/updateJob/:id' component={updateJob} />
              <Route path='/profile' component={profile} />
              <Route path='/profile2' component={profile2} />
              <Route path='/updateProfile/:id' component={updateProfile} />
              <Route path='/updateProfile2:id' component={updateProfile2} />
              <Route path='/myListings' component={myListings} />
              <Route path='/myApplied' component={myApplied} />
              <Route path='/whoApplied/:id' component={whoApplied} />
              

          </Container>


        )
    }

}

export default Body;