function debounce(fn, delay){
  let timeout;
  return function() {
    clearTimeout(timeout)
    setTimeout(() => {
      fn.call(this)
    }, delay)
  }
}

// // 求一个字符串数组中最长公共前缀的函数
// 例子1: ['a','abc','ad'] return 'a'
// 例子2: ['ca','abc','ad'] return ''
// 例子3: ['ab','abc','abd'] return 'ab'
// console.log(myFun1(['a','abc','ad']))
function myFun1(arr) {
  let res = arr[0]
  for(let i = 1;i< arr.length;i++){
    if(res === '') return ''
    res = temFn(res, arr[i])
  }
  return res
}
function temFn(str1, str2) {
  if(str1 === '' || str2 === '') return ''
  const temArr1 = str1.split('')
  const temArr2 = str2.split('')
  let index = 0
  for(let i = 0;i < temArr1.length;i++){
    index = i
    if(temArr1[i]!== temArr2[i]){
      break
    }
  }
  console.log(index)
  return str1.substring(0, index)
}
