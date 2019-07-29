import React from 'react';
import Logo from '../../component/logo/logo';
import { List, InputItem, WingBlank, Button, WhiteSpace } from 'antd-mobile';
import { connect } from 'react-redux';
import { login } from '../../redux/user.index';
import { Redirect } from 'react-router-dom'

@connect(
    state => state.user,
    { login }
)
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.register = this.register.bind(this);
        this.login = this.login.bind(this);
        this.state = {
            name: '',
            pwd: '',
            verifyCode: ''
        }
    }

    componentDidMount() {
        window.addEventListener('keydown', (e) => {
            if (e.keyCode === 13) {
                this.props.login(this.state)
            }
        })
    }

    handleChange(key, val) {
        this.setState({
            [key]: val
        })
    }

    login() {
        this.props.login(this.state);
    }

    register() {
        this.props.history.push('/register');
    }

    render() {
        return (
            <div>
                {this.props.router ? <Redirect to={this.props.router} /> : null}
                <Logo></Logo>
                <h1>登录页面</h1>
                {this.props.msg ? <p>{this.props.msg}</p> : null}
                <WingBlank>
                    <List>
                        <WhiteSpace />
                        <InputItem
                            onChange={(val) => this.handleChange('name', val)}
                            type='text'
                        >用户名</InputItem>
                        <WhiteSpace />
                        <InputItem
                            onChange={(val) => this.handleChange('pwd', val)}
                            type='password'
                        >密码</InputItem>
                        <WhiteSpace />
                        <InputItem
                            onChange={(val) => this.handleChange('verifyCode', val)}
                        >验证码</InputItem>
                    </List>
                    <WhiteSpace />
                    <Button
                        onClick={this.login}
                        type='primary'
                    >登录</Button>
                    <WhiteSpace />
                    <Button
                        onClick={this.register}
                        type='primary'
                    >注册</Button>
                </WingBlank>
            </div>
        );
    }
}

export default Login;
