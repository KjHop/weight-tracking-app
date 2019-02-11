import * as React from 'react';
import App from "./App";
import MainPage from "./Main site/MainPage"
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class Viewer extends React.Component{
    render(){
        return(
            <div className="Viewer">
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={MainPage}/>
                        <Route path="/login" component={App}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default Viewer;