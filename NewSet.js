// --------------NEW SET():
// Set হল জাভাস্ক্রিপ্টের একটা special object, যেখানে তুমি unique (একটা মান একবারই থাকবে) মান রাখতে পারো।
// মানে, এখানে ডুপ্লিকেট মান (একই মান একাধিকবার) রাখা যায় না ❌

let numbers = new Set([1, 2, 3, 3, 4]); //এখানে 3 দুইবার ছিল, কিন্তু Set একবারই রেখেছে ✅
console.log(numbers); // Set(4) {1, 2, 3, 4}

// -----------METHODS:
// METHOD	                    WORK	                                          EXAMPLE
// add(value)	         নতুন মান যোগ করে	                                  mySet.add(5)
// delete(value)	       মান মুছে দেয়	                                      mySet.delete(2)
// has(value)	       মান আছে কিনা দেখে	                                  mySet.has(3) → true
// clear()	                সব মান মুছে দেয়	                                  mySet.clear()
// size	              মোট কয়টা মান আছে জানায়	                             mySet.size

let fruits = new Set();

fruits.add("apple");
fruits.add("banana");
fruits.add("apple"); // একই মান, তাই দ্বিতীয়টা উপেক্ষা হবে

console.log(fruits); // Set(2) { 'apple', 'banana' }
console.log(fruits.has("banana")); // true
console.log(fruits.size); // 2

// 💡 Why use Set?
// To remove duplicates from an array easily:
let arr = [1, 2, 2, 3, 4, 4];
let uniqueArr = [...new Set(arr)];
console.log(uniqueArr); // [1, 2, 3, 4]
