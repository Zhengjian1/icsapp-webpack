/**
 * 常量配置
 */
const glob = require('glob');
const path = require('path');
let env = process.env.NODE_ENV || 'development';

const pattern = path.join(__dirname, env, '/**/*.json');
const os = require('os');
const configs = {};

glob.sync(pattern).forEach(file => {
    const name = path.basename(file, '.json');

    try {
        configs[name] = require(file);
    } catch (e) {
        console.error(`Invalid config file. ${file}\n${e}`);
    }
});

configs.hostname = os.hostname();
configs.map = new Map();
// console.info(JSON.stringify(configs));
module.exports = configs;
