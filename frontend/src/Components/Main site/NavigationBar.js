import * as React from 'react';
import "../../Styles/NavigationBar.css";
import {Link} from 'react-router-dom';

class NavigationBar extends React.Component{
    render(){
        return(
            <div className="NavigationBar">
                <ul>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/graph">Graph</Link>
                    </li>
                    <li>
                        <Link to="/journal">Journal</Link>
                    </li>
                </ul>
            </div>
        )
    }
}
export default NavigationBar;