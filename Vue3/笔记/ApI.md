1. `setup()`
   一个可以访问`Vue`提供的其他组合式`api`的接口的函数，且返回的对象直接暴露给组件模板使用
   参数：props和context: {emits, slots, expose}, props对象是具有响应性的
   返回值：对象或者渲染函数
2. `<script setup>`
   `setup()`方法的语法糖，在其内部定义的顶级变量都会被直接暴露给组件模板