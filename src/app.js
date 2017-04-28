function useBind() {
  console.log(this.foo)
}

const o = {
  foo: 'bar',
}

o::useBind()
