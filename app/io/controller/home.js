'use strict';

const Controller = require('egg').Controller;

class IoController extends Controller {
  async server() {
    const data = this.ctx.args[0]; // 前端发送过来的数据
    console.log(data);
    await this.ctx.socket.emit('res', '你好前端....'); // 前端发送过来的数据
  }
}

module.exports = IoController;
