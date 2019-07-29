import React from 'react';
import { Grid } from 'antd-mobile';
import PropTypes from 'prop-types';

class AvatarSelector extends React.Component {
    // static：静态数据，只能通过类名进行调用，而不能通过对象名调用。静态属性可以被继承。调用方法：BossInfo.propTypes。
    static propTypes = {
        selectAvatar: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            avatarElem: null
        }
    }

    selectingAvatar = (el) => {
        this.setState({
            avatarElem: el
        })
        this.props.selectAvatar(el.text)
    }

    render() {
        const avatarList = 'bear,boy,cat,dear,dog,girl,monkey,panda,pig,horse,bee,fox,lion,tiger,bull'
            .split(',')
            .map(v => ({
                icon: require(`../../img/${v}.png`),
                text: v
            }))

        const focusedAvatar = this.state.avatarElem
            ? (
                <span>
                    <span>已选择头像</span>
                    <img
                        style={{ width: '2rem' }}
                        alt=""
                        src={this.state.avatarElem.icon}
                    />
                </span>
            )
            : "请选择头像";

        return (
            <div>
                {focusedAvatar}
                <Grid
                    data={avatarList}
                    columnNum={5}
                    onClick={el => this.selectingAvatar(el)}
                />
            </div>
        );
    }
}

export default AvatarSelector;