// router: /user

const express = require('express');
const Router = express.Router();
const model = require('./model');
const User = model.getModel('user');
const utils = require('utility');

const _filter = { "pwd": 0, "_v": 0 };

function md5pwd(pwd) {
    const salt = "ew98fhewfi@#~!@dfDSdsf";
    return utils.md5(utils.md5(pwd + salt));
}

Router.get('/info', function (req, res) {
    const { userid } = req.cookies;
    console.log(userid)
    if (!userid) {
        return res.json({ code: 1 });
    }
    User.findOne({ _id: userid }, _filter, function (err, doc) {
        if (err) {
            return res.json({ code: 1, msg: "后端出错了" });
        }
        if (!doc) {
            return res.json({ code: 1 })
        }
        return res.json({ code: 0, data: doc })
    })
})

Router.get('/list', function (req, res) {
    // User.remove({}, function (err, doc) { });
    const condition = req.query;
    User.find(condition, function (err, doc) {
        if (err) {
            return res.json({ code: 1, msg: '后端出错了' });
        }

        return res.json({code: 0, data: doc});
    })
})

// 设置MongoDB不可见字段
Router.post('/login', function (req, res) {
    const { name, pwd } = req.body;
    User.findOne({ name, pwd: md5pwd(pwd) }, _filter, function (err, doc) {
        if (!doc) {
            return res.json({ code: 1, msg: '手机号或密码错误' });
        }
        res.cookie('userid', doc._id);
        // console.log(doc)
        return res.json({ code: 0, data: doc })
    })
})

Router.post('/register', function (req, res) {
    console.log('user: ', req.body);
    const { name, pwd, type } = req.body;
    User.findOne({ name }, function (err, doc) {
        if (doc) {
            return res.json({ code: 1, msg: '用户名重复' })
        }

        // 写法二：创建后可以获取到文档内容
        const userModel = new User({ name, pwd: md5pwd(pwd), type });
        userModel.save(function (err, doc) {
            if (err) {
                return res.json({ code: 1, msg: '后端出错了' })
            }
            const { _id, type, name } = doc;
            res.cookie('userid', _id);
            return res.json({ code: 0, data: { _id, type, name } });
        })
        // 写法一：创建用户
        // User.create({ name, pwd: md5pwd(pwd), type }, function (err, doc) {
        //     if (err) {
        //         return res.json({ code: 1, msg: '后端出错了' })
        //     }
        //     return res.json({ code: 0 })
        // })
    })
})

Router.post('/update', function (req, res) {
    const userid = req.cookies.userid;
    // console.log(req.cookies)
    if (!userid) {
        return res.json({ code: 1 });
    }

    const userInfo = req.body;
    User.findByIdAndUpdate(userid, userInfo, function (err, doc) {
        if (err) {
            return res.json({ code: 1, msg: '后端出错了' });
        }

        // 问题：以下代码是否可以不添加？
        const data = Object.assign({}, {
            name: doc.name,
            type: doc.type
        }, userInfo)
        return res.json({ code: 0, data });
    })
})

module.exports = Router;