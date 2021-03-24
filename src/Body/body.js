import Register from './Register';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import {Container,Row,Col} from 'react-bootstrap';
const {Component}=require("react");




class Body extends Component {
  

    render() {
        return(
          <Container>
              THis is body
              <Route path='/register' component={Register} />
              

          </Container>


        )
    }

}

export default Body;