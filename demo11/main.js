// import load from 'bundle-loader?lazy!./a'
// // lazy  表示懒加载
// load((file) => {
//     document.open();
//     document.write('<h1>' + file + '</h1>');
//     document.close();
// })
// 这里的import不同于模块引入时的import，可以理解为一个动态加载的模块的函数(function-like)
// ，传入其中的参数就是相应的模块。




import("./a").then((res)=>{
    document.open();
    document.write('<h1>' + res + '</h1>');
    document.close();
})
