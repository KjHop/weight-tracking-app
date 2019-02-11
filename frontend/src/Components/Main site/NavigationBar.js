import * as React from 'react';
import "../../Styles/NavigationBar.css";
import {Link} from 'react-router-dom';

class NavigationBar extends React.Component{
    render(){
        return(
            <div className="NavigationBar">
                <Link to="/about">About</Link>
                <Link to="/graph">Graph</Link>
                <Link to="/journal">Journal</Link>
            </div>
        )
    }
}
export default NavigationBar;