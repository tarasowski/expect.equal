# expect.equal

> If the only available assertion in every test suite was equal(), almost every test suite in the world would be better for it. Because equal() by nature answers the two most important questions every unit test must answer: 1) What is the actual output?, 2) What is expected output? by Eric Elliot

## Motivation

If you are writing in a pure funtional style, which means a) no side-effect, b) no shared/global state. You only need to test the input to the output. There is nothing else to test. Since pure functions transform data (from A -> B, from raw data to html etc.). If you need to test side-effects such as database, http calls, reading writing to disk, you need to use integrational tests. Mocking is code smell.

## API

```js
module.exports = expect
```

## Examples

```js
const expect = require('./index')

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x)

const id = x => x
const double = x => x * x
const triple = x => x * x * x

const multiply = compose(triple, double, id)

const test = actual => expected => msg =>
    expect(actual)
        .toEqual(expected, msg)

test(id(1))
    (1)('should return 1')
test(double(2))
    (4)('should return 4')
test(triple(2))
    (8)('should return 8')

// no need to test multiply() since it's composed out of 3 functions: 
// id(), double(), triple()
// they have been tested before.

test(multiply(2))
    (64)('should return 64')
```
