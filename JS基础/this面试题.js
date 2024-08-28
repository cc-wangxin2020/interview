/**
 * this显示绑定、隐式绑定、`new` 绑定
 * 箭头函数不能进行this绑定，它的this值指向它所在的作用域
 */
var name = 'window'
function Person(name) {
  this.name = name
  this.obj = {
    name: 'obj',
    foo1: function () {
      return function () {
        console.log(this.name)
      }
    },
    foo2: function () {
      return () => {
        console.log(this.name)
      }
    }
  }
}
var person1 = new Person('person1')
var person2 = new Person('person2')

person1.obj.foo1()()
person1.obj.foo1.call(person2)()
person1.obj.foo1().call(person2)
person1.obj.foo2()()
person1.obj.foo2.call(person2)()
person1.obj.foo2().call(person2) 