import * as React from 'react';
import "../../Styles/Navbar.css";
import {Layout} from 'antd';

const {Header, Footer, Sider, Content,} = Layout;

class Navbar extends React.Component{
    render(){
        return(
            <div className="Navbar">
                <Layout>
                    <Header>header</Header>
                    <Layout>
                        <Sider>left sidebar</Sider>
                        <Content>main content</Content>
                        <Sider>right sidebar</Sider>
                    </Layout>
                    <Footer>footer</Footer>
                </Layout>
            </div>
        )
    }
}
export default Navbar;