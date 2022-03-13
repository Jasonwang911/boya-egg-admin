'use strict';

const log = require('npmlog');

log.heading = '博雅智能';
log.headingStyle = { fg: 'green', bg: 'blue' };

// 定制的log
log.addLevel('success', 2000, { fg: 'green', bold: true });

module.exports = log;
