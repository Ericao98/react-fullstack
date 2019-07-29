import React from 'react';
import { NavBar, TextareaItem, Button, InputItem } from 'antd-mobile';
import AvatarSelector from '../../component/avatarSelector/avatarSelector';
import { connect } from 'react-redux';
import { updateData } from '../../redux/user.index';
import { Redirect } from 'react-router-dom';
// import { withRouter } from 'react-router-dom';

// @withRouter
@connect(
    state => state.user,
    { updateData }
)
class GeniusInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            avatar: '',
            title: '',
            desc: ''
        }
    }

    handleClick = (key, val) => {
        this.setState({
            [key]: val
        })
    }

    selectAvatar = (text) => {
        this.setState({
            avatar: text
        })
    }

    saveUserInfo = () => {
        this.props.updateData(this.state);
    }

    render() {
        const router = this.props.router,
            pathname = this.props.location.pathname;
        return (
            <div>
                {router && !(router === pathname)
                    ? <Redirect to={router}></Redirect>
                    : null
                }
                
                <NavBar
                    mode="dark"
                >
                    牛人完善信息页
                </NavBar>
                <AvatarSelector
                    selectAvatar={this.selectAvatar}
                ></AvatarSelector>
                <InputItem
                    onChange={(val) => { this.handleClick('title', val) }}
                >
                    求职岗位
                </InputItem>
                <TextareaItem
                    title="个人简介"
                    row={3}
                    autoHeight
                    onChange={(val) => { this.handleClick('desc', val) }}
                />
                <Button
                    type="primary"
                    onClick={this.saveUserInfo}
                >保存</Button>
            </div>
        );
    }
}

export default GeniusInfo;