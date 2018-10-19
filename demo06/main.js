import Vue from "Vue";
import $style from "./app.scss"
// 直接以  导出 css modules的 形式  给$style
//   真的是高手操作   
new Vue({
    el: '#wrapper',
    data: {
       h1s:"hello world",
       h2s:"Hello Webpack"
    },
    methods: {
      hello () {
        alert('This is the message.')
      }
    },
    created(){
        console.log($style);
    },
    render: function render(h) {
      return (
        <div>
          <h2 class={$style.h2}>hdxsdsds3wllo</h2>  
        <div id={$style.demo}>
        <h1 class={$style.h1}>{this.h1s}</h1>
        {/* 再jsx中变量以单括号表达 */}
        <h2 class="h2">{this.h2s}</h2>
        <h2 class={$style.h2}>sdadss</h2>  
      </div> 
        </div>
      )
    }
  });