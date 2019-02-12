import * as React from 'react';
import App from "./App";
import WelcomePage from "./Welcome screen/WelcomePage";
import RegisterPage from "./Register screen/RegisterPage";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class Viewer extends React.Component{
    render(){
        return(
            <div className="Viewer">
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={WelcomePage}/>
                        <Route path="/login" component={App}/>
                        <Route path="/register" component={RegisterPage}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default Viewer;