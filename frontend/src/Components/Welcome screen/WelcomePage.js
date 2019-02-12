import * as React from 'react';
import "../../Styles/WelcomePage.css";
import {Link} from 'react-router-dom';

class WelcomePage extends React.Component{
    render(){
        return(
            <div className="WelcomePage">
                <div className="WelcomePageHeading">
                    <h1>Light weight</h1>
                    <h2>More than just a weight tracking app</h2>
                    <Link to="/register"><button className="WelcomePageSignup">Sign Up</button></Link>
                    <h3>Already a member? <span className="WelcomePageSignin"><Link to="/login">Sign In</Link></span></h3>
                </div>
            </div>
        )
    }
}

export default WelcomePage;