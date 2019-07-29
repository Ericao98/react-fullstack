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
class BossInfo extends React.Component {
    // static：静态数据，只能通过类名进行调用，而不能通过对象名调用。静态属性可以被继承。调用方法：BossInfo.propTypes。
    // static propTypes = {
    //     selectAvatar: PropTypes.func.isRequired
    // }

    constructor(props) {
        super(props);
        this.state = {
            avatar: '',
            title: '',
            company: '',
            money: '',
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
                    Boss完善信息页
                </NavBar>
                <AvatarSelector
                    selectAvatar={this.selectAvatar}
                ></AvatarSelector>
                <InputItem
                    onChange={(val) => { this.handleClick('title', val) }}
                >
                    招聘名称
                </InputItem>
                <InputItem
                    onChange={(val) => { this.handleClick('company', val) }}
                >
                    公司名称
                </InputItem>
                <InputItem
                    onChange={(val) => { this.handleClick('money', val) }}
                >
                    职位薪资
                </InputItem>
                <TextareaItem
                    title="职位要求"
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

export default BossInfo;