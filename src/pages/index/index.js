import './index.css'
import 'js/common.js'
const a = 2
console.log(a)
const p = function(){
  console.log('运行在p',a)
}
p()
const c = 1000
console.log(c)
const fn = () => {
  console.log(this)
}
fn()