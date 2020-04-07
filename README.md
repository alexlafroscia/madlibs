# `madlibs`

> A tiny library for creating partial functions

## Why?

I saw a tweet the other day asking about languages that support partial function application out-of-the-box. The example they save made me think od [MadLibs][madlibs], where you create a story by filling in the blanks. What if we could define a partial function based on blanks and filled-in values?

And thus, this silly little library was born.

## Example

```javascript
import { create, blank } from "@alexlafroscia/madlibs";

function greetPerson(greeting, person) {
  return `${greeting}, ${person}`;
}

const sayHello = create(greetPerson, "Hello", blank);
sayHello("Alex"); // Hello, Alex

const sayGoodbye = create(greetPerson, "Goodbye", blank);
sayGoodbye("Alex"); // Goodbye, Alex

const greetAlex = create(greetPerson, blank, "Alex");
greetAlex("Hello"); // Hello, Alex
greetAlex("Goodbye"); // Goodbye, Alex

const sayGoodbyeToAlex = create(greetAlex, "Goodbye");
sayGoodbyeToAlex(); // Goodbye, Alex
```

[madlibs]: https://en.wikipedia.org/wiki/Mad_Libs
