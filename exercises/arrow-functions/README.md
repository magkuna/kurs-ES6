# Arrow functions

## Krótszy zapis

Należy maksymalnie skrócić zapis przez wykorzystanie `arrow function`

```javascript
let evens = [1, 3, 5, 7];

// ES5
var odds = evens.map(function(v) { return v + 1; });
var pairs = evens.map(function(v) { return { even: v, odd: v + 1 }; });
var nums = evens.map(function(v, i) { return v + i; });

```

## Scope/this

Wykorzystując `arrow function` należy pozbyć się przypisania `this` do zmiennej `self`;

```javascript
var App = {
  init: function() {
  	var self = this;
    $('body').click(function() {
      self.handle()
    })
  },
  handle: function() {
    alert('CLICK');
  }
};

App.init();
```

### Więcej
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions