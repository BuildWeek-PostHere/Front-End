export const wait = function() {
  return new Promise(resolve => {
    console.log('waiting!')
    setTimeout(function() {
      resolve('wait');
    }, 200)
  })
}