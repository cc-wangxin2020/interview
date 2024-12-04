// aa_bc/aa_bb-cc
function myFun(str) {
  // str.toLowCase()
  return str.replace(/(_\w)|(-\w)/g, function (match) {
    return match.substring(1).toUpperCase();
  })
}

console.log(myFun('aa_bb-cc'));

// sum(1)(2)(3)(4).value()  10
// sum(1, 2)(3, 4).value() 10
// sum(1, 2).value() 3
function sum() {
  let result = Array.from(arguments).reduce((pre, cur) => pre + cur, 0)
  // const obj = {
  //   value: function () {
  //     return result
  //   },
  //   add: function() {
  //     result += Array.from(arguments).reduce((pre, cur) => pre + cur, 0)
  //     return this.add
  //   }
  // }
  function add() {
    result += Array.from(arguments).reduce((pre, cur) => pre + cur, 0)
    return add
  }
  add.value = function () {
    return result
  }
  return add
}

console.log(sum(2, 1)(3, 4).value())



// 例子：输入
// 3   1,2,3
// 1, 5 理解时间
// 1  2  4  发送时间 n-1
// 2  3  6
// 输出：time
const n = await readline()
const getTime = (await readline()).split(' ')
const root = new Node(0, 0)
const nodes = {
  1: root
}
for (let i = 0; i < parseInt(n); i++) {
  const node = new Node(0, getTime[i])
  nodes[i+2] = node
}
for (let i = 0; i < n - 1; i++) {
  const [parent, cur, sendTime] = (await readline()).split(' ')
  nodes[cur].setParent(nodes[parent])
  nodes[cur].setTime(sendTime)
}
function Node(sendTime, getTime) {
  this.parent = null
  this.sendTime = sendTime
  this.getTime = getTime
  this.setParent = (node) => {
    this.parent = node
  }
  this.setTime = (time) => {
    this.sendTime = time
  }
}