function f() {
    let x;
    if (true) {
      x = 'ok';
    }
    x = "inner";
    console.log(x);
  };
  f();