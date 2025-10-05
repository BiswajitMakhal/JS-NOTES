let person1 = {
  name: "Biswajit",
  age: 26,
  greet: function () {
    let arrow = () => {
      console.log(this);
    };
    arrow();
  },
};
person1.greet();
