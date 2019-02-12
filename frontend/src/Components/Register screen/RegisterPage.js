import * as React from 'react';
import "../../Styles/RegisterPage.css";
import logo from "../../Images/logo.png";

class RegisterPage extends React.Component{
    render(){
        return(
            <div className="RegisterPage">
                <h1>Light weight</h1>
                <img src={logo} alt="logo"/>
                <form>
                    <input type="text" placeholder="Username"/>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <input type="submit" value="Register"/>
                </form>
            </div>
        )
    }
}

export default RegisterPage;