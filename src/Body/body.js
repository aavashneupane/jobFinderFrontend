import Register from './Register';
import Login from './Login';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import {Container,Row,Col} from 'react-bootstrap';
import jobAdd from '../Components/Company/jobAdd';
import showAllJob from '../Components/Company/showAllJob';
import showcontactus from '../Components/admin/showcontactus';
import myListings from '../Components/Company/myListings';
import myApplied from '../Components/Customer/myApplied';
import profile2 from './profile2';
import updateProfile2 from '../Components/Customer/updateProfile2';
import updateResume from '../Components/Customer/updateResume';
import updatePicture from '../Components/Customer/updatePicture';

import whoApplied from '../Components/Company/whoApplied';
import updateJob from '../Components/Company/updateJob';
import profile from './profile';
import updateProfile from '../Components/Company/updateProfile';
import home from '../Components/Common/home';
import aboutus from '../Components/Common/aboutus';
import contact from '../Components/Common/contact';
const {Component}=require("react");




class Body extends Component {
  

    render() {
        return(
          <div>
              <Route path="/" exact component={home}/>
              <Route path='/register' component={Register} />
              <Route path='/login' component={Login} />
              <Route path='/aboutus' component={aboutus} />
              <Route path='/contact' component={contact} />
              <Route path='/jobAdd' component={jobAdd} />
              <Route path='/showAllJob' component={showAllJob} />
              <Route path='/showcontactus' component={showcontactus} />
              <Route path='/updateJob/:id' component={updateJob} />
              <Route path='/profile' component={profile} />
              <Route path='/profile2' component={profile2} />
              <Route path='/updateProfile/:id' component={updateProfile} />
              <Route path='/updateProfile2/:id' component={updateProfile2} />
              <Route path='/updateResume/:id' component={updateResume} />
              <Route path='/updatePicture/:id' component={updatePicture} />
              <Route path='/myListings' component={myListings} />
              <Route path='/myApplied' component={myApplied} />
              <Route path='/whoApplied/:id' component={whoApplied} />
              

          </div>


        )
    }

}

export default Body;