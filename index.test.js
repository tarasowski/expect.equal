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