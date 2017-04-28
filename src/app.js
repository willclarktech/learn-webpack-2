import moment from 'moment'
var rightNow = moment().format('MMMM Do YYYY, h:mm:ss a')
console.log(rightNow)
// "October 23rd 2016, 9:30:24 pm"

function useBind() {
  console.log(this.foo)
}

const o = {
  foo: 'bar',
}

o::useBind()
