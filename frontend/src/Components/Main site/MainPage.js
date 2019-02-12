import * as React from 'react';
import "../../Styles/MainPage.css";
import {Link} from 'react-router-dom';

class MainPage extends React.Component{
    render(){
        return(
            <div className="MainPage">
                <div className="MainPageHeading">
                    <h1>Light weight</h1>
                    <h2>More than just a weight tracking app</h2>
                    <button className="MainPageSignup">Sign Up</button>
                    <h3>Already a member? <span className="MainPageSignin"><Link to="/login">Sign In</Link></span></h3>
                </div>
            </div>
        )
    }
}

export default MainPage;