import {Link} from 'react-router-dom';
const {Component}=require("react");


class Header extends Component {

    render() {
        return(
            <div>
                <Link to="/register"> Register</Link>
                <Link to="/login"> Login</Link>
                <Link to="/jobAdd"> Job Add</Link>
                <Link to="/updateJob"> Update Job</Link>
            </div>
        )
    }

}

export default Header;