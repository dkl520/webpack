// 在react-router4之前，按需加载使用的是require.ensure的方法，异步加载组件。
// 异步加载组件  即需要的时候 加载组件
require.ensure(['./a'],(require)=>{
     var content=require("./a");
     document.open();
     document.write(`<h1>${content}</h1>`)
     console.log(content)
     document.close();
})
