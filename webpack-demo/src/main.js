// require es5 引入方式
const user = require('./user.js')
const login = require('./login.js')

import request from './request'

require('./login.css')

user.info('jim')
login.add(1, 2)


export function getList(params) {
    return request({
        url: '/table/list',
        method: 'get',
        params: query
    })
}
