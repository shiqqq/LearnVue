/* webpack ./src/main.js ./dist/bundle.js 
    让webpack来处理模块直接的依赖，并且将src里的所有文件打包成一个文件
    后面index里面只需要引用一个文件就可以了
*/


import { name, gender } from './infor';

console.log(name);
console.log(gender);