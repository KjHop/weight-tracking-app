import * as React from 'react';
import "../../Styles/LoginPage.css";
import logo from "../../Images/logo.png";
import {Link} from 'react-router-dom';

class LoginPage extends React.Component{
    render(){
        return(
            <div className="LoginPage">
                <h1>Light weight</h1>
                <img src={logo} alt="logo"/>
                <form>
                    <input type="text" placeholder="Username"/>
                    <input type="password" placeholder="Password"/>
                    <Link to="/login"><input type="submit" value="Login"/></Link>
                </form>
            </div>
        )
    }
}

export default LoginPage;