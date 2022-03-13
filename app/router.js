'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  // const { router, controller, io } = app;
  const { io } = app;
  // router.post('/generate/apis', controller.apis.generateApis);

  // socket.io
  io.route('res', io.controller.home.server);
};
