/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  config.cluster = {
    listen: {
      path: '',
      port: 5000,
      hostname: '0.0.0.0',
    },
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1626427224008_8980';

  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    domainWhiteList: [ '*' ],
  };
  // config.jwt = {
  //   secret: '^_^', // 用于解密和加密密钥
  //   sign: {
  //     // jwt.sign(***,***,[options,***])方法中，options的默认设置可以在这里配置；
  //     // 多少s后过期，jwt.sing(plyload,secret,{expiresIn:number})会被合并，调用时设置优先级更高;
  //     expiresIn: 60 * 60 * 24,
  //   },
  // };
  config.cors = {
    origin: '*', // 匹配规则  域名+端口  *则为全匹配
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    credentials: true,
  };

  config.io = {
    init: {}, // passed to engine.io
    namespace: {
      '/': {
        connectionMiddleware: [ ],
        packetMiddleware: [],
      },
      '/msg': {
        connectionMiddleware: [],
        packetMiddleware: [],
      },
    },
  };

  // add your middleware config here
  config.middleware = [ ];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    // 用来生成token的数据，此项目并没有使用数据库，不使用用户信息来生成token
    // websocketToken: 'xxxxxxrrr',
  };

  return {
    ...config,
    ...userConfig,
  };
};
