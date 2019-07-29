import React from 'react';
import Logo from '../../component/logo/logo'
import { Radio, List, InputItem, WingBlank, Button, WhiteSpace } from 'antd-mobile';
import { connect } from 'react-redux';
import { register } from '../../redux/user.index';
import { Redirect } from 'react-router-dom';

@connect(
    state => state.user,
    { register }
)
class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            pwd: '',
            confirmpwd: '',
            type: 'genius'      // 或者boss
        }
        this.handleRegister = this.handleRegister.bind(this);
    }

    handleChange(key, val) {
        this.setState({
            [key]: val
        });
    }

    handleRegister() {
        // console.log(this.state)
        this.props.register(this.state);
    }

    render() {
        const RadioItem = Radio.RadioItem;
        return (
            <div>
                {this.props.router ? <Redirect to={this.props.router} /> : null}
                <Logo></Logo>
                <h1>注册页面</h1>
                {this.props.msg ? <p>{this.props.msg}</p> : null}
                <WingBlank>
                    <List>
                        <WhiteSpace />
                        <InputItem
                            type='text'
                            onChange={(val) => this.handleChange('name', val)}
                        >用户名</InputItem>
                        <WhiteSpace />
                        <InputItem
                            type='password'
                            onChange={(val) => this.handleChange('pwd', val)}
                        >密码</InputItem>
                        <WhiteSpace />
                        <InputItem
                            type='password'
                            onChange={(val) => this.handleChange('confirmpwd', val)}
                        >确认密码</InputItem>
                        <WhiteSpace />
                        <RadioItem
                            checked={this.state.type === 'genius'}
                            onChange={() => this.handleChange('type', 'genius')}
                        >
                            牛人
                        </RadioItem>
                        <RadioItem
                            checked={this.state.type === 'boss'}
                            onChange={() => this.handleChange('type', 'boss')}
                        >
                            BOSS
                        </RadioItem>
                    </List>
                    <WhiteSpace />
                    <Button
                        onClick={this.handleRegister}
                        type='primary'
                    >注册</Button>
                </WingBlank>
            </div>
        );
    }
}

export default Register;
