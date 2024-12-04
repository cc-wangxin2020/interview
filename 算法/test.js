function myFun(test) {
  console.log(test)
  function test() { }
  console.log(test)
  var test = '123'
  console.log(test);
}
myFun()

function log(time){
  setTimeout(function(){
      console.log(time);
      return 1;
  },time)
}
async function fun(){
  let a = await log(1000);
  let b = await log(3000);
  let c = log(2000);
  console.log(a);
  console.log(1)
}
fun(); 
// 立即输出 undefined 1
// 1秒后输出 1000
// 2秒后输出 2000
// 3秒后输出 3000
