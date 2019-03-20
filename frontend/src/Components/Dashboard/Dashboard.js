import * as React from 'react';
import "../../Styles/Dashboard.css";
import Navbar from "./Navbar";

class Dashboard extends React.Component{
    render(){
        return(
            <div className="Dashboard">
                <Navbar/>
            </div>
        )
    }
}

export default Dashboard;