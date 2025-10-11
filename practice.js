function outer() {
  let a = 10;
  return function inner() {
    console.log(a);
  };
}

let ref = outer();
ref(); // 10

// এখনো 'a' memory তে আছে কারণ closure ওটাকে ধরে রেখেছে
// ref = null; // এখন 'a' আর ধরে রাখছে না -> GC clean করবে

console.log(a);
