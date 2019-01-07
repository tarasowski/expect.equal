# expect.equal
Just for testing your pure functions and nothing else

> If the only available assertion in every test suite was equal(), almost every test suite in the world would be better for it. Because equal() by nature answers the two most important questions every unit test must answer: 1) What is the actual output?, 2) What is expected output? by Eric Elliot


* API

```js
module.exports = expect
``´

* Example

```js
const expect = require('./index')

const double = x => x * 2

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
