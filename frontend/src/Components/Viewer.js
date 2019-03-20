import * as React from 'react';
import App from "./App";
import WelcomePage from "./Welcome screen/WelcomePage";
import RegisterPage from "./Register screen/RegisterPage";
import Dashboard from "../Components/Dashboard/Dashboard";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

class Viewer extends React.Component{
    render(){
        return(
            <CookiesProvider>
                <div className="Viewer">
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/" component={WelcomePage}/>
                            <Route path="/login" component={App}/>
                            <Route path="/register" component={RegisterPage}/>
                            <Route path="/dashboard" component={Dashboard}/>
                        </Switch>
                    </BrowserRouter>
                </div>
            </CookiesProvider>
            
        )
    }
}

export default Viewer;