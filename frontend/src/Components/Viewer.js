import * as React from 'react';
import App from "./App";
import { BrowserRouter, Route } from 'react-router-dom';

class Viewer extends React.Component{
    render(){
        return(
            <div className="Viewer">
                <BrowserRouter>
                    <div>
                        <Route path="/" component={App}/>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default Viewer;