import './contact.css';
const {Component}=require("react");



class contact extends Component {
    

    
    render() {
        return (
    
    

                    <div className="contact">
                       
<div class="container">
  <div>
    <h2>Contact Us</h2>
    <p>Swing by for a cup of coffee, or leave us a message:</p>
  </div>
  <div class="row">
    <div class="column">
    <img src={`http://localhost:91/images/user.jpg`} alt="Jane" style={{width:"325px"}} ></img>
    </div>
    <div class="column">
      
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
        <label for="email">Email</label>
        <input type="text" id="email" name="email" placeholder="Your email.."/>
        
        
        <label for="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
        <input type="submit" value="Submit"/>
      
    </div>
  </div>
</div> 
                        
                    </div>
            
            
            
        )
    }

}

export default contact;