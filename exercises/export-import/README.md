# import & export
```
$ npm install
$ npm start
```
Zmieniamy zawartość pliku `src/index.js`

## import
Należy zaimportować funkcje `sum` i `diff` z `math.js` i wykonać operacje.

```javascript
import {sum, diff} from './math';
console.log(sum(2,3));
console.log(diff(13,3));
```

Należy zaimportować domyślny export z pliku/modułu `math.js` jako `info` i wyświetlić informacje o module.

```javascript
import info from '/.math';
console.log(info());
```

Należy zaimportować funkcje `sum` pod nazwą `sumowanieLiczb` z `math.js`.

```javascript
import {sum as sumowanieLiczb} from './math';
console.log(sumowanieLiczb(12,1));
```

Importujemy cała zawartość `math.js` jako i przypisujemy do `lib`.

```javascript
import * as lib from './math';
console.log(lib.sum(2,3));
console.log(lib.diff(13,3));
```

## export

Tworzmy plik `src/validator.js`, 

```javascript
const min = 10;
const max = 100;
export {min, max};
export defualt class Validator {
  constructor(value){
    this.value = value;
  }
  isValid(){
    return this.value > min && this.value < max;
  }
};
```

W pliku `src/index.js` importujemy exportowane wartości z `src/validator.js`.

```javascript
import Validator, { min, max } from './validator';
let validator = new Validator(55);

console.log(`Min: ${min}, Max: ${max}`, validator.isValid());
````



### Więcej
- https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/import
- https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export