import React from 'react';
import { TabBar } from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';

@withRouter
class TabLink extends React.Component {
    static propTypes = {
        data: PropTypes.array.isRequired
    }

    render() {
        const data = this.props.data.filter(v => !v.hidden);
        return (
            <div>
                <TabBar>
                    {data.map(v => {
                        return (
                            <TabBar.Item
                                title={v.name}
                                key={v.path}
                                icon={{ uri: require(`../../img/${v.icon}.png`) }}
                                selectedIcon={{ uri: require(`../../img/${v.icon}-active.png`) }}
                                selected={v.path === this.props.location.pathname}
                                onPress={() => {
                                    this.props.history.push(v.path)
                                }}
                            >
                            </TabBar.Item>
                        );
                    })}
                </TabBar>
            </div>
        );
    }
}

export default TabLink;