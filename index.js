function error({ counter, actual, expected, msg }) {
    console.error('\x1b[31m', '\n', 'not ok', '#' + counter, msg, '\n', 'actual: ', actual, '\n', 'expected:', expected, '\x1b[0m', '\n')
    throw Error('Test failed!')
}

const success = ({ counter, msg }) =>
    console.log(`ok #${counter} ${msg}`)


const expect = (counter => actual => (
    {
        toEqual: (expected, msg = '') =>
            JSON.stringify(actual) === JSON.stringify(expected)
                ? (counter++ , success({ counter, msg }))
                : (counter++ , error({ counter, actual, expected, msg }))
    }
))(0)


module.exports = expect

