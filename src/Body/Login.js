const {Component}=require("react");
const axios = require('axios').default;



class Login extends Component {
state={
    email:'',
    password: ''
};
inputHandler = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}
submitLogin=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:91/user/login", this.state)
    .then(response => {
        console.log("success");
        alert("Login Successfull")
        localStorage.setItem('token',response.data.token)

        //console.log(response.data);
    })
    .catch(err => {
        console.log(err.response);
        alert("Login unsuccessfull")
    })
    
    
  
};

    render() {
        return(
            <div>

            <h2>Login</h2>

            <form>
                <p>Email<input type="text" value={this.state.email} name="email"
                    onChange={this.inputHandler} /></p>

                <p>Password<input type="password" value={this.state.password} name="password"
                    onChange={this.inputHandler} /></p>

                <button onClick={this.submitLogin}>Submit</button>

            </form>



        </div>



        )
    }

}

export default Login;