const str = 'cat-caT_cat.cAt*cat'
console.log(str.toLocaleUpperCase());
console.log(str.toUpperCase())
console.log(str.toLowerCase())
// str.toLowerCase().replace(/^[]/)
console.log(str.charCodeAt(1));
console.log(str.endsWith('cat'))
console.log(str.includes('cat'))
console.log(str.indexOf('cat'));
console.log(str.lastIndexOf('cat'));
const reg = /[\_|\-|\.|\*][a-z]/g
console.log(str.toLowerCase().replace(reg, (match) => {
  console.log(match)
  return match.substring(1).toUpperCase()
}));
