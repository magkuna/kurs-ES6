# Destructuring

## Tablice

Przypisać wartości do zmiennych `error` i `ok` przy pomocy `destructuring`.

```javascript
let colors = ['red', 'green'];

???
console.log(`Errors takes color ${error} and OK state is in ${ok} color`);
```

## Obiekty

Przypisać wartości do zmiennych `name` i `email` przy pomocy `destructuring`.

```javascript
const user = { 
  name: 'Bob', 
  email: 'bob@gmail.com',
  age : 43
};

????
console.log(`My name is ${name}, my email is ${email}`);
```

Przypisać bezpośrednio do stałych `width` i `height` wynik funkcji `dimensions`.

```javascript
const dimensions = () => ({ width: 100, height: 200 });

????
console.log(`Width should be 100 - ${width === 100} and height should be 200 ${height === 200}`);
```

Przypisac tylko pierwszy i czwarty element tablicy do zmiennych first, fourth

```javascript
let table = ['first', 'second', 'third', 'fourth'];

????
console.log(`Is first first? => ${first === 'first'}, and second second? => ${second === 'second'}`);
```

Tryb mieszany, weźmy w jednej deklaracji elementy z obiektu i zawartej w niej tablicy

```javascript
let mixed = {
  one: 1,
  two: 2,
  values: [3, 4, 5]
};

????
console.log(` ${one}, ${two}, ${three}, ${five} `);
```
### Więcej
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
- https://medium.com/ecmascript-2015/es6-destructuring-13ca399f993a
