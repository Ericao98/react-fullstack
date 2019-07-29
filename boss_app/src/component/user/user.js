import React from 'react';
import { connect } from 'react-redux';
import { Result, List, WhiteSpace } from 'antd-mobile';

@connect(
    state => state.user
)
class User extends React.Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout() {
        console.log('logout')
    }

    render() {
        const props = this.props;
        const Item = List.Item;
        const Brief = Item.Brief;
        return props.name ? (
            <div>
                <Result
                    img={<img src={require(`../../img/${props.avatar}.png`)} alt="" style={{ width: 50 }} />}
                    title={props.name}
                    message={props.type === 'boss' ? props.company : null}
                />

                <List renderHeader={() => '简介'}>
                    <Item
                        multipleLine
                    >
                        {props.title}
                        {props.desc.split('\n').map((v, index) => <Brief key={index}>{v}</Brief>)}
                        {props.money ? <Brief>薪资：{props.money}</Brief> : null}
                    </Item>
                </List>
                <WhiteSpace></WhiteSpace>
                <List>
                    <Item
                        onClick={this.logout}
                    >
                        退出登录
                    </Item>
                </List>
            </div>
        ) : null;
    }
}

export default User;