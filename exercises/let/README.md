# LET

## Zasięg

Tradycyjne deklaracja `var`, zmienna jest dostępna poza blokiem

```javascript
var numbers = [1,2,3,5,8];
for (var i = 0; i <= numbers.length; i++) {
  console.log(numbers[i]);
}
console.log('i = ', i);
```

Należy zmienić `var i = 0` na `let i = 0` i uruchomić kod

## Ponowna deklaracja

```javascript
function f() {
  var x;
  if (true) {
    x = 'ok';
  }
  var x = "inner";
  console.log(x);
};
f();
```

Należy deklaracje `var` zmiennej `x` zamienić na `let`.

## Hosting

Należy na dwa sposoby naprawić poniższy kod (pozbyć się błędu `ReferenceError: can't access lexical declaration x' before initialization`)

```javascript
function f() {
  x = 2;
  let x;
  console.log(x);
};
f();
```

### Więcej
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let