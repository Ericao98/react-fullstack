import React from 'react';
import Logo from '../../component/logo/logo';
import { List, InputItem, WingBlank, Button, WhiteSpace } from 'antd-mobile';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.register = this.register.bind(this);
    }

    register() {
        this.props.history.push('/register');
    }

    render() {
        return (
            <div>
                <Logo></Logo>
                <h1>登录页面</h1>
                <WingBlank>
                    <List>
                        <WhiteSpace />
                        <InputItem type='phone'>手机号</InputItem>
                        <WhiteSpace />
                        <InputItem type='password'>密码</InputItem>
                        <WhiteSpace />
                        <InputItem>验证码</InputItem>
                    </List>
                    <WhiteSpace />
                    <Button type='primary'>登录</Button>
                    <WhiteSpace />
                    <Button onClick={this.register} type='primary'>注册</Button>
                </WingBlank>
            </div>
        );
    }
}

export default Login;
