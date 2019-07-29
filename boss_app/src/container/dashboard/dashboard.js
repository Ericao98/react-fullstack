import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { NavBar } from 'antd-mobile';
import TabLink from '../../component/tablink/tablink';
import { connect } from 'react-redux';
import Boss from '../../component/boss/boss';
import Genius from '../../component/genius/genius';
import User from '../../component/user/user';

// function Boss() {
//     return <h1>Boss页面</h1>;
// }
// function Genius() {
//     return <h1>Genius页面</h1>;
// }
function Msg() {
    return <h1>Msg页面</h1>;
}
// function User() {
//     return <h1>User页面</h1>;
// }

@connect(
    state => state
)
class DashBoard extends React.Component {
    render() {
        const { user } = this.props;
        const navData = [
            {
                path: '/boss',
                title: '牛人列表',
                name: '牛人',
                icon: 'boss',
                type: 'boss',
                component: Boss,
                hidden: user.type === 'genius'
            }, {
                path: '/genius',
                title: 'BOSS列表',
                name: 'BOSS',
                icon: 'genius',
                type: 'genius',
                component: Genius,
                hidden: user.type === 'boss'
            }, {
                path: '/msg',
                title: '消息',
                name: '消息',
                icon: 'msg',
                component: Msg,
            }, {
                path: '/user',
                title: '个人信息中心',
                name: '我',
                icon: 'me',
                component: User,
            }
        ];
        // const Comp = navData.find(v => v.path == this.props.location.pathname).component;
        // console.log(this.props.user, navData)
        return (
            <div>
                <NavBar mode="dark">
                    {navData.find(v => v.path === this.props.location.pathname).title}
                </NavBar>
                <Switch>
                    {navData.map(v => <Route key={v.path} path={v.path} component={v.component}></Route>)}
                </Switch>
                <TabLink data={navData}> </TabLink>
            </div>
        );
    }
}


export default DashBoard;
