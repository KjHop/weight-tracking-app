import * as React from 'react';
import "../../Styles/RegisterPage.css";
import logo from "../../Images/logo.png";
import axios from 'axios';

const inputs = ["username", "email", "password"];

class RegisterPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password:"",
            email:""
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e){
        if(inputs.includes(e.target.name)){
            this.setState({
                [e.target.name]: e.target.value
            });
        }
    }

    handleSubmit(e){
        e.preventDefault();
        axios.post('http://192.168.8.100:8080/register', {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email
        })
        .then(response=>{
            alert(response.data);
        })
        .catch(error=>{
            console.log(error);
        });
    }

    render(){
        return(
            <div className="RegisterPage">
                <h1>Light weight</h1>
                <img src={logo} alt="logo"/>
                <form onSubmit={(e)=>this.handleSubmit(e)}>
                    <input type="text" placeholder="Username" onChange={(e)=>this.handleInput(e)} name="username"/>
                    <input type="password" placeholder="Password" onChange={(e)=>this.handleInput(e)} name="password"/>
                    <input type="email" placeholder="Email" onChange={(e)=>this.handleInput(e)} name="email"/>
                    <input type="submit" value="Register"/>
                </form>
            </div>
        )
    }
}

export default RegisterPage;