// named exports(can be as many as we needed)
// default exports (can be only one)

console.log('utilities.js')

const add = (a, b) => a + b
const name = 'webpack-dev-server'
const square = (x) => x * x

export { add, name, square as default }
