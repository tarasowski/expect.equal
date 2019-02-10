# expect.equal

> If the only available assertion in every test suite was equal(), almost every test suite in the world would be better for it. Because equal() by nature answers the two most important questions every unit test must answer: 1) What is the actual output?, 2) What is expected output? ~Eric Elliot

## Motivation

If you are writing in a pure functional style, which means a) no side-effect, b) no shared/global state. You only need to test the input to the output. There is nothing else to test. Since pure functions transform data (from A -> B, from raw to HTML etc.). If you need to test side-effects such as a database connection, HTTP calls, reading/writing to disk, you need to use integrational tests. Mocking is a code smell.

## API

```js
module.exports = { expect } 
```

## Examples

```js
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x)

const id = x => x
const double = x => x * x
const triple = x => x * x * x

const multiply = compose(triple, double, id)

const test = actual => expected => msg =>
    expect(actual)
        .toEqual(expected, msg)

test(id(1))
    (1)('id() should return 1')
test(double(2))
    (4)('double() should return 4')
test(triple(2))
    (8)('triple() should return 8')

// multiply() doesn't need to be tested, since it's a composition
// of 3 functions that have already been tested.
```
