# expect.equal
Just for testing your pure functions and nothing else

> If the only available assertion in every test suite was equal(), almost every test suite in the world would be better for it. Because equal() by nature answers the two most important questions every unit test must answer: 1) What is the actual output?, 2) What is expected output? by Eric Elliot

* Motivation

* If you are writing in a pure funtional style, which means having only pure function. You only need to test the input to the output. There is nothing else to test. If you need to test I/O e.g. database, http calls, you need to use integrational tests. That's it, no need for mocks or stubs.

* API

```js
module.exports = expect
``´

* Example

```js
const expect = require('./index')

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x)

const id = x => x
const double = x => x * x
const triple = x => x * x * x


const testDouble = actual => expected => msg =>
    expect(actual)
        .toEqual(expected, msg)

testDouble(double(5))(10)(
    'it should check if values are equal'
)
testDouble([1, 2, 3])([1, 2, 3])(
    'it should check if values are equal'
)
testDouble(double(5))(11)(
    'it should fail the test'
)
```
