import React from 'react';
import Logo from '../../component/logo/logo'
import { Radio, List, InputItem, WingBlank, Button, WhiteSpace } from 'antd-mobile';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'genius'      // 或者boss
        }
    }
    render() {
        const RadioItem = Radio.RadioItem;
        return (
            <div>
                <Logo></Logo>
                <h1>注册页面</h1>
                <WingBlank>
                    <List>
                        <WhiteSpace />
                        <InputItem type='phone'>手机号</InputItem>
                        <WhiteSpace />
                        <InputItem type='password'>密码</InputItem>
                        <WhiteSpace />
                        <InputItem type='password'>确认密码</InputItem>
                        <WhiteSpace />
                        <InputItem>验证码</InputItem>
                        {/* 需要用onChange来改变属性 */}
                        <RadioItem checked={this.state.type=='genius'}>
                            牛人
                        </RadioItem>
                        <RadioItem checked={this.state.type=='boss'}>
                            BOSS
                        </RadioItem>
                    </List>
                    <WhiteSpace />
                    <Button onClick={this.register} type='primary'>注册</Button>
                </WingBlank>
            </div>
        );
    }
}

export default Register;
