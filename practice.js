let persons = {
  user1: "Biswajit",
  user2: "Sourav",
};

function xxx(a, b, c) {
  console.log(this, a, b, c);
}

let fnc = xxx.bind(persons, 40, 50, 60);
// fnc();
