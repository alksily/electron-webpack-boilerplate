const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config.js');
const {spawn} = require('child_process');

module.exports = merge(webpackConfig, {
    mode: 'development',
    devtool: 'eval',
    
    devServer: {
        host: '0.0.0.0',
        stats: {
            colors: true,
            chunks: false,
            children: false
        },
        before() {
            spawn(
                'electron',
                ['.'],
                {shell: true, env: process.env, stdio: 'inherit'}
            )
                .on('close', code => process.exit(0))
                .on('error', spawnError => console.error(spawnError));
        }
    }
});
