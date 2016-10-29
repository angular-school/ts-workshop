# TypeScript Workshop

The main idea of this workshop is to create the hierarchy we could use to create a Trello clone in TypeScript.

## Prerequisites

- `npm install typescript tslint -g`
- `npm install`
- `npm run compile`

## Steps

### 1. Type System (https://www.gitbook.com/book/basarat/typescript/details)

The two main goals of TypeScript are:
- Provide an optional type system for JavaScript.
- Provide planned features from future JavaScript editions to current JavaScript engines

In order to fullfil these objectives TS needs to be optional meaning that you could easily rename a .js file to .ts and everything should still work as expected.

In TypeScript types can be:
- Implicit
- Explicit

#### Type inference

TypeScript is really good at infering types so:

```ts
var foo = 123;
foo = '456'; // Error: cannot assign 'string' to 'number1'
```

will throw an error. 

TypeScript will try to infer as much as it can safely do but we can further improve this by adding postfixed annotations to our code. This not only helps the compiler but also provides awesome documentation.

```ts
var foo: number = 123;
foo = '456'; // Error: cannot assign 'string' to 'number1'
```

Types are also structural, meaning that:

```ts
class b {
	num: number;
}

let a = {
    num: 1
}

const c = new b();

function paramFun(param: b) {}

paramFun(a);
paramFun(c);
paramFun({});
```

this first 2 calls work because both contain complatible objects. The last call, however, won't work.

#### Types

```ts
var num: number;
var str: string;
var bool: boolean;
var arr: any[]; 
var arr2: Array<any>;
```

#### Special Types

- `any` : it can be assigned to anything and anything can be assigned to it.
- `null | undefined` : treated as `any` so it have the same behavior.
- `:void` : it means 'this function has no return type'.

Additionaly, TypeScript supports generics using the traditional <T> notation.

```ts
function reverse<T>(items: T[]): T[] {
    var toreturn = [];
    for (let i = items.length - 1; i >= 0; i--) {
        toreturn.push(items[i]);
    }
    return toreturn;
}

var sample = [1, 2, 3];
var reversed = reverse(sample);
console.log(reversed); // 3,2,1

// Safety!
reversed[0] = '1';     // Error!
reversed = ['1', '2']; // Error!

reversed[0] = 1;       // Okay
reversed = [1, 2];     // Okay
```

#### Union Type
```ts
function formatCommandline(command: string[]|string) {
    var line = '';
    if (typeof command === 'string') {
        line = command.trim();
    } else {
        line = command.join(' ').trim();
    }

    // Do stuff with line:string
}
```

#### Intersection Type
```ts
function extend<T, U>(first: T, second: U): T & U {
    let result = <T & U> {};
    for (let id in first) {
        result[id] = first[id];
    }
    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            result[id] = second[id];
        }
    }
    return result;
}

var x = extend({ a: "hello" }, { b: 42 });

// x now has both `a` and `b`
var a = x.a;
var b = x.b;
```

#### Tuple Type
```ts
var nameNumber: [string, number];

// Okay
nameNumber = ['Jenny', 8675309];

// Error!
nameNumber = ['Jenny', '867-5309'];
```

#### Interfaces
```ts
interface Name {
    first: string;
    second: string;
}

var name: Name;
name = {
    first: 'John',
    second: 'Doe'
};

name = {           // Error : `second` is missing
    first: 'John'
};
name = {           // Error : `second` is the wrong type
    first: 'John',
    second: 1337
};
```

#### Type Alias
```ts
type StrOrNum = string|number;

// Usage: just like any other notation
var sample: StrOrNum;
sample = 123;
sample = '123';

// Just checking
sample = true; // Error!
```
Unlike an `interface` you can give a type alias to literally any type annotation (useful for stuff like union and intersection types). 
```ts
type Text = string | { text: string };
type Coordinates = [number, number];
type Callback = (data: string) => void;
```

### 2. JavaScript Features

Most ES6 features are available in TypeScript.
Complete https://github.com/domenic/count-to-6 before proceeding to the next step.
Additionaly you can check: https://basarat.gitbooks.io/typescript/content/docs/future-javascript.html for TS specific examples.

### 3. Hands on

Create the following class hierarchy:

- List
- BoardList
- CardList
- Board
- Card
- CardElement
- Tags

Use types, interfaces, modules and es6 features to provide a flexible API to create new Boards, Lists and Cards.

Possible Solution: `git checkout solution && node js/trello.js`

