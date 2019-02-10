const error = ({ counter, actual, expected, msg })  => {
    console.error('not ok', '#' + counter, msg, '\n\n', 'actual:\n', actual, '\n\n', 'expected:\n', expected,  '\n')
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


module.exports = { expect }

