console.log(myFun('2014-10-10'))
function myFun(str) {
  return str.split('-').reverse().join('/')
}