var data = require("data")
import Vue from "Vue"
new Vue({
    render(h){
        return h("h1",data)
    }
}).$mount("#app")