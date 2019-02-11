import * as React from 'react';
import "../Styles/App.css";
import LoginForm from './Login screen/LoginPage';

class App extends React.Component{
    render(){
        return(
            <div className="App">
                <LoginForm/>
            </div>
        )
    }
}

export default App;