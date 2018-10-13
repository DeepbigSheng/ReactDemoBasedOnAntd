import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Button, Layout, Menu} from 'antd';
import '../css/main.css';

const {Header, Content, Footer} = Layout;
const {SubMenu} = Menu;

class App extends Component{
    render(){
        return (
            <div>
                <Header>
                    <h1 className={'header'}>This is a header</h1>
                </Header>

                <Content className={'content'}>
                    <p>Hello, world!</p>
                    <Button type={'primary'}>
                        Hello
                    </Button>
                </Content>

                <Footer className={'footer'}>
                    By Victor Lin
                </Footer>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)