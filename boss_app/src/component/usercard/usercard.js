import React from 'react';
import PropTypes from 'prop-types';
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';

class UserCard extends React.Component {
    static propTypes = {
        userList: PropTypes.array.isRequired
    }

    render() {
        const data = this.props.userList;
        const Header = Card.Header;
        const Body = Card.Body;
        return (
            <WingBlank>
                <WhiteSpace />
                {
                    data.map(v => {
                        if (!v.avatar) {
                            return null;
                        }
                        return (
                            <Card key={v._id}>
                                <Header
                                    title={v.name}
                                    thumb={require(`../../img/${v.avatar}.png`)}
                                    thumbStyle={{ width: '2rem', height: '2rem' }}
                                    extra={<span>{v.title}</span>}
                                />
                                <Body>
                                    {v.type === 'boss'
                                        ? <div>公司：{v.company}</div>
                                        : null}
                                    <div>
                                        {v.desc.split('\n').map((item, index) => (
                                            <div key={index}>{item}</div>
                                        ))}
                                    </div>
                                    {v.type === 'boss'
                                        ? <div>薪资：{v.money}</div>
                                        : null}
                                </Body>
                            </Card>
                        );
                    })
                }
            </WingBlank>
        );
    }
}

export default UserCard;
