# const

## Zasięg bloku

```javascript
if (true) {
  const season = 'winter';
}
console.log(season);// ReferenceError: season is not defined 
```

## Brak możliwości ponownego przypisania

```javascript
const AGE = 33;
AGE = 13;// TypeError: invalid assignment to const `AGE'
```

## Możliwość zmiany wartości

To jest dozwolone

```javascript
const user = {
  name : 'hubert',
  age : 33
};
user.name = 'barry';
```

Zmiana przypisania powoduję wystąpienie błędu
```javascript
user = null;// TypeError: invalid assignment to const `user'
```

### Więcej
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
