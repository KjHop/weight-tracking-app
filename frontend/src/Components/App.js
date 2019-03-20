import * as React from 'react';
import "../Styles/App.css";
import LoginForm from './Login screen/LoginPage';
import {withRouter} from 'react-router-dom';

class App extends React.Component{
    render(){
        const LoginFormWithRouter = withRouter(LoginForm);
        return(
            <div className="App">
                <LoginFormWithRouter/>
            </div>
        )
    }
}

export default App;