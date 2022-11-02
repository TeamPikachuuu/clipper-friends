// function sum(a, b) {
//   return a + b;
// }

// test('Adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

// /** ToEqual
//  * Recursively checks every field of an object or array
//  */
// test('Object key values', () => {
//   const data = { one: 1 };
//   data['two'] = 2;
//   expect(data).toEqual({ one: 1, two: 2 });
// });

// /** .not API
//  * Check for the opposite of a matcher
//  */
// test('Adding positive numbers is not zero', () => {
//   for (let a = 1; a < 10; a++) {
//     for (let b = 1; b < 10; b++) {
//       expect(a + b).not.toBe(0);
//     }
//   }
// });

// /** Truthiness for Null
//  * toBeNull();            Matches only null
//  * toBeDefined();         Matches only undefined
//  * not.toBeUndefined();   The opposite of toBeUndefined
//  * not.toBeTruthy();      Anything that an if statement treats as true
//  * toBeFalsy();           Anything that an if statement treats as false
//  */
// test('Testing null expressions', () => {
//   const n = null;
//   expect(n).toBeNull(); // Matches only null
//   expect(n).toBeDefined(); // Matches only undefined
//   expect(n).not.toBeUndefined(); // The opposite of toBeUndefined
//   expect(n).not.toBeTruthy(); // Anything that an if statement treats as true
//   expect(n).toBeFalsy(); // Anything that an if statement treats as false
// });

// /** Truthiness for 0
//  * toBeNull();            Matches only null
//  * toBeDefined();         Matches only undefined
//  * not.toBeUndefined();   The opposite of toBeUndefined
//  * not.toBeTruthy();      Anything that an if statement treats as true
//  * toBeFalsy();           Anything that an if statement treats as false
//  */
// test('Testing 0 with null expressions', () => {
//   const z = 0;
//   expect(z).not.toBeNull();
//   expect(z).toBeDefined();
//   expect(z).not.toBeUndefined();
//   expect(z).not.toBeTruthy();
//   expect(z).toBeFalsy();
// });

// /** Numbers
//  * Comparing numbers
//  */
// test('Two Plus Two', () => {
//   const value = 2 + 2;
//   expect(value).toBeGreaterThan(3);
//   expect(value).toBeGreaterThanOrEqual(3.5);
//   expect(value).toBeLessThan(5);
//   expect(value).toBeLessThanOrEqual(4.5);

//   // toBe and toEqual are equivalent for numbers
//   expect(value).toBe(4);
//   expect(value).toEqual(4);
// });

// test('Adding floating point numbers', () => {
//   const value = 0.1 + 0.2;
//   // expect(value).toBe(0.3);
//   expect(value).toBeCloseTo(0.3);
// });

// test('Arrays and iterables', () => {
//   const shoppingList = [
//     'diapers',
//     'kleenex',
//     'trash bags',
//     'paper towels',
//     'milk'
//   ];

//   expect(shoppingList).toContain('milk');
//   expect(new Set(shoppingList)).toContain('milk');
// });

// // Testing Throw errors
// test('Compile throw error function goes as expected', () => {
//   function compileAndroidCode() {
//     throw new Error('You are using the wrong JDK!');
//   }
//   expect(() => compileAndroidCode()).toThrow();
//   expect(() => compileAndroidCode()).toThrow(Error);

//   // You can also use a string that must be contained in the err msg or regexp
//   expect(() => compileAndroidCode()).toThrow('You are using the wrong JDK!');
//   expect(() => compileAndroidCode()).toThrow(/JDK/);
// });

// // _____________Asynchronous_________________

// test('The data is peanut butter using async/await', async () => {
//   function resolveAfter2Seconds() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve('peanut butter');
//       }, 1000);
//     });
//   }

//   const data = await resolveAfter2Seconds();
//   expect(data).toBe('peanut butter');

//   expect.assertions(1);
//   try {
//     await resolveAfter2Seconds();
//   } catch (e) {
//     expect(e).toMatch('error');
//   }
// });

const arr = [];

beforeEach(() => {
  arr.push('a');
});

afterEach(() => {
  arr.pop();
});
