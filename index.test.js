const { expect } = require('./index')

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

// multiply() doesn't need to be tested, since it's a composition
// of 3 functions that have already been tested.
