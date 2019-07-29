const DB_URL = 'mongodb://localhost:27017/user';
const mongoose = require('mongoose');

mongoose.connect(DB_URL);
mongoose.connection.on('connected', function () {
    console.log('mongo connect success')
})

const models = {
    // 用户集合
    user: {
        'name': { 'type': String, 'require': true },   // 手机号
        'pwd': { 'type': String, 'require': true },     // 密码
        'name': { 'type': String },                     // 姓名
        'type': { 'type': String },
        'avatar': { 'type': String },
        'title': { 'type': String },
        'company': { 'type': String },
        'money': { 'type': String },
        'desc': { 'type': String },
    },
    chat: {

    }
}

for (let i in models) {
    mongoose.model(i, new mongoose.Schema(models[i]))
}

module.exports = {
    getModel: function (name) {
        return mongoose.model(name);
    }
};
