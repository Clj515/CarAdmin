const {override, fixBabelImports, addLessLoader} = require('customize-cra'); 
module.exports = override( 
  fixBabelImports('import', { 
    libraryName: 'antd', 
    libraryDirectory: 'es', 
    style: true, 
  }), 
  addLessLoader({
      javascriptEnabled: true,
      modifyVars: {'@primary-color': '#42aee0'},
    }), 
 );


// const{override,fixBabelImports,addLessLoader} = require('customize-cra');

// module.exports = override(
//   //针对antd打包，使用import 来打包
//   fixBabelImports('import',{
//     libraryName:'antd',
//     libraryDirectory:'es',
//     style:true,//自动打包相关的样式,处理less文件
//   }),
//   //使用less-loader对源码中的less的变量进行改变
//   addLessLoader({ 
//     javascriptEnabled: true, 
//     modifyVars: {'@primary-color': '#1DA57A'}, 
//   }),
// )