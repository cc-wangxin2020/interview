function myFun() {
  const temFun = function () {
    const tem = temFun.tem2;
    temFun.tem2 += temFun.tem1;
    temFun.tem1 = tem;
    return temFun;
  };
  temFun.tem1 = 1;
  temFun.tem2 = 1;
  return temFun;
}

// const fib = myFun();
// console.log(fib().tem2);
// console.log(fib().tem2);
// console.log(fib().tem2);
// console.log(fib().tem2);

const temFun = function () {
  const tem = temFun.tem2;
  temFun.tem2 += temFun.tem1;
  temFun.tem1 = tem;
  return temFun;
};
temFun.tem1 = 1;
temFun.tem2 = 1;

console.log(temFun().tem2);
console.log(temFun().tem2);
