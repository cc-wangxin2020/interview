const promise = new Promise((resolve, reject) => {
  resolve(1)
}).then(res => {
  console.log('res:', res);
  throw new Error('err')
}, err => {
  console.log(err)
  return err
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log('err:', err);
  console.log('111');
}).then(res => {
  console.log(res);

})