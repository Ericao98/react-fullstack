import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

@withRouter
class AuthRouter extends React.Component {

    componentDidMount() {
        const pages = ['/login', '/register'];
        const pathname = this.props.location.pathname;
        if (pages.indexOf(pathname) > -1) {
            return null;
        }
        axios.get('/user/info')
            .then(res => {
                if (res.status == 200) {
                    if (res.data.code == 0) {
                        ;
                    } else {
                        // 问题：当点击浏览器上方的回退按钮时，还是可能回到需要用户认证的页面，如：boss页面
                        this.props.history.push('/login');
                    }
                }
            }).catch(err => {
                console.log(err);
            })
    }

    render() {
        return null;
    }
}

export default AuthRouter;
