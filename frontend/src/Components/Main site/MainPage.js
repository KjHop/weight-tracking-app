import * as React from 'react';
import "../../Styles/MainPage.css";
import NavigationBar from "./NavigationBar";

class MainPage extends React.Component{
    render(){
        return(
            <div className="MainPage">
                <NavigationBar/>
            </div>
        )
    }
}

export default MainPage;