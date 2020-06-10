const {
    override,
    adjustStyleLoaders,
    fixBabelImports, // 按需加载配置函数
    addBabelPlugins // babel插件配置函数
} = require('customize-cra')
module.exports = override(
    adjustStyleLoaders(rule => {
        if (rule.test.toString().includes("scss")) {
          rule.use.push({
            loader: require.resolve("sass-resources-loader"),
            options: {
              resources: "./src/assets/scss/common.scss" //这里是你自己放公共scss变量的路径
            }
          });
        }
    }),
    addBabelPlugins( // ⽀持装饰器
        [
            '@babel/plugin-proposal-decorators',
            {
                legacy: true
            }
        ]
    ),
    fixBabelImports('import', { // antd 按需加载
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css'
    })
)