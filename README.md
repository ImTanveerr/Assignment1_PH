## POST 1: Understanding the use of keyof Keyword

### What is keyof?

The `keyof` keyword in TypeScript returns a union of string literal types representing the property keys of an object type.

### Basic Example
**Example 1**

```ts
type Car = {
  brand: string;
  year: number;
};

type CarKeys = keyof Car; // "brand" | "year"
```
In this example, CarKeys becomes a union type: `brand` | `year`. That means variables of this type can only be `brand` or `year`.

**Example 2**
```ts
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const car = { brand: "Toyota", year: 2022 };

const brand = getProperty(car, "brand"); // ✅ OK
// const color = getProperty(car, "color"); ❌ Error: "color" is not a key of car

```
In this example,`keyof T` extracts the keys of type `T` (e.g., `brand` | `year` from the `car` object). 
``K extends keyof T`` means the key parameter must be one of the actual keys of obj.
This ensures type safety — it can’t access a property that doesn’t exist. Such as, we ask for `color` it will give error.

### Why Use `keyof`?

- **Enforces strict typing**  
  Ensures that only valid property names are used, helping you catch errors at compile time.

- **Prevents invalid property access**  
  Avoids runtime issues by ensuring you're only accessing existing properties on an object.

- **Works great with generics**  
  Enhances flexibility and reusability in type-safe generic functions and components.
### Conclusion
For building reusable, type-safe utilities in TypeScript, keyof is a must-have in your toolkit. It helps to write robust and maintainable code by tightly coupling objects with their property types.
##

## POST 2: What is Type Inference in TypeScript and Why it is helpful?
### What is Type Inference?
Type inference is TypeScript's ability to automatically determine the type of a variable, parameter, or return value based on its value or context — without the developer explicitly specifying the type.

### Basic Example
**Example 1**
```ts
let message = "Hello, world!";
message = 42; // ❌ Error: Type 'number' is not assignable to type 'string'
```
In this example we didn't write `:string`,however Typescript infers that `message` as `string` type. 
Therefore, when we try to assign a number it give error.
**Example 2**
```ts
function add(a = 5, b = 10) {
  return a + b;
}
// TypeScript infers: (a?: number, b?: number) => number

```
In this example, initialization infers `number` and function return sum of `numbers`.

### Why inference is useful:
- **Less typing, more coding: Reduces the need for explicit type annotations, speeding up development.**
- **Cleaner code: Eliminates redundant type declarations while preserving type safety.**
- **Enhanced IDE support: Features like IntelliSense still provide accurate code suggestions and error detection.**

### Conclusion
TypeScript’s type inference is like an intelligent assistant—it works quietly in the background to keep your code safe and clean. This is useful for our productivity.

  
