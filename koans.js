import test from 'ava'
const __ = undefined

/**
 * Your overall goal for this assignment is to get all of the tests to pass.
 * This is an exercise both in testing as well as in the Javascript language
 * itself.
 * 
 * Replace all of the __ in the tests below with the appropriate value to 
 * make the test pass.
 */

/**
 * Assertions
 * 
 * There are different types of assertions built-in to Ava, which are meant
 * for setting up different kinds of tests.
 * 
 * You can read up on all of the assertion types here:
 * https://github.com/avajs/ava#assertions
 * 
 * We used the is() assertion in class today.
 */

test('What will satisfy the truthy assertion?', function (trial) {
  t.truthy(__);
});

test('What is a falsey value?', function (trial) {
  t.falsy(__);
});

test('What is true?', function (trial) {
  t.true(__);
});

test('What is false?', function (trial) {
  t.false(__);
});

test('What will satisfy the equality assertion?', function (trial) {
  trial.is(__, 1 + 1);
});

test('What will satisfy the inequality assertion?', function (trial) {
  t.not(__, 1 + 1)
})

/**
 * Operators
 */

test('What is addition?', function (trial) {
  t.is(28 + __, 42)
})

test('What is assignment addition?', function (trial) {
  let result = 34
  result += 23 // Equivalent to `result = result + n`; but more concise.

  t.is(__, result)
})

test('What is subtraction?', function (trial) {
  t.is(30 - __, 21)
})

test('What is assignment subtraction?', function (trial) {
  let result = 5
  result -= 2

  t.is(__, result)
})

// Assignment operators are available for multiplication and division as well.
// Let's do one more, the modulo (%) operator, used for showing division remainder.

test('What is modulus?', function (trial) {
  const x = 5
  let result = 10
  result %= x // Same as `result = result % x`.

  t.is(__, result, 'What is the value of result?')
})

/**
 * Equality
 */

test('What is ===?', function (trial) {
  const numberLiteral = 3

  t.true(__ === numberLiteral)
})

test('What is ==?', function (trial) {
  const quotedNumber = '3'

  t.true(quotedNumber == __)
})

/**
 * Truthyness
 *   https://developer.mozilla.org/en-US/docs/Glossary/Truthy
 */

test('What is the truthyness of positive numbers?', function (trial) {
  const oneIsTruthy = !!1

  t.is(__, oneIsTruthy)
})

test('What is the truthyness of negative numbers?', function (trial) {
  const negativeOneIsTruthy = !!-1

  t.is(__, negativeOneIsTruthy)
})

/**
 * Assignment
 */

test('Assigning a value to a local variable.', function (trial) {
  let one
  one = 1

  t.is(__, one)
})

/**
 * Numbers
 */

// typeof() is a function that returns the type of its parameter as 
// a string.
test('What is the javascript numeric type?', function (trial) {
  t.is(__, typeof(42));
})


test('Are integers and floats the same type?', function (trial) {
  t.is(__, typeof(3.14159) === typeof(6))
})

/**
 * NaN
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
 */
test('What is NaN?', function (trial) {
  const resultOfFailedOperations = 42 / 'wat'

  t.is(__, isNaN(resultOfFailedOperations))
})

/**
 * Strings
 */
test('Are similar strings with different quote styles equal?', function (trial) {
  const doubleQuotedString = "apple"
  const singleQuotedString = 'apple'

  t.is(__, doubleQuotedString === singleQuotedString)
})

test('What is string concatenation?', function (trial) {
  const fruit = 'apple'
  const dish = 'pie'

  t.is(__, fruit + ' ' + dish)
})

test('How do you find the length of a string?', function (trial) {
  const fruit = 'apple'

  t.is(__, fruit.length)
})

test('What is slicing a string?', function (trial) {
  const fruit = 'apple pie'

  t.is(__, fruit.slice(0, 5))
})

/**
 * Control Structures
 */

test('What is an if statement?', function (trial) {
  const two = 2
  let isPositive = false
  if (two > 0) {
    isPositive = true
  }

  t.is(__, isPositive)
})

test('What is a for loop?', function (trial) {
  let counter = 10
  for (let i = 1; i <= 3; i++) {
    counter = counter + i
  }

  t.is(__, counter)
})

/**
 * Ternary operators (similar to 'if' statement)
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 */
test('What is a ternary operator?', function (trial) {
  const two = 2
  let fruit = two > 0 ? 'apple' : 'orange'
  t.is(__, fruit)

  fruit = two < 0 ? 'apple' : 'orange'
  t.is(__, fruit)
})

/**
 * Arrays
 */

test('What is indexing an array literal', function (trial) {
  const things = ['cellar door', 42, true]

  t.is(__, things[0])
  t.is(__, things[1])
  t.is(__, things[2])
})

test('What is the type of an array?', function (trial) {
  t.is(__, typeof([]))
})

test('What is the length of of an array?', function (trial) {
  t.is(__, ['a', 'b', 'c'].length)
})

test('What are stack methods on arrays?', function (trial) {
  let stack = []
  stack.push('first')
  stack.push('second')

  t.is(__, stack.pop())
  t.is(__, stack.pop())
})

test('What are queue methods on arrays?', function (trial) {
  const queue = []
  queue.push('first')
  queue.push('second')
  queue.unshift('third')

  t.is(__, queue.shift())
  t.is(__, queue.shift())
})

/**
 * Objects
 */

test('What is the type of an object?', function (trial) {
  t.is(__, typeof({}))
})

test('What is object literal notation?', function (trial) {
  let person = {
    name: 'Amory Blaine',
    age: 102
  }

  t.is(__, person.name)
  t.is(__, person.age)
})

test('Dynamically adding properties to an object.', function (trial) {
  const person = {}
  person.__ = 'Amory Blaine'
  person.__ = 102
  t.is('Amory Blaine', person.name)
  t.is(102, person.age)
})

/**
 * Array syntax for objects
 */
test('Accessing object properties with strings.', function (trial) {
  const person = { name: 'Amory Blaine', age: 102 }

  t.is(person['__'], 'Amory Blaine')
  t.is(person['__'], 102)
})