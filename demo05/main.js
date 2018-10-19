import src1 from "./small.png"
import src2 from "./big.png"

// import导入图片的方法  不能直接赋值  需要接收后再赋值
// 上文中先用src1接收后再赋值给img1.src1
// import和require不同的是 require不会声明提前  import会声明提前 同 var
let img1=document.createElement("img")
img1.src=src1;
document.body.appendChild(img1)
var img2=document.createElement("img")
img2.src=src2;
document.body.appendChild(img2)
