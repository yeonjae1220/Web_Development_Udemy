for (let i = 0; i < 10; i++) {
  console.log(i);
}

const users = ["Max", "Anna", "Joel"];

for (const user of users) {
  console.log(user);
}

const loggedInUser = {
  name: "Max",
  age: 32,
  isAdmin: true,
};

for (const propertyName in loggedInUser) {
    console.log(propertyName);
    // 아리처럼 해야 참조 가능하다
    console.log(loggedInUser[propertyName]);       //log(loggedInUser.name);// 동일하다 loggedInUser['name']
}

let ifFinished = false;

while (!ifFinished) {
    ifFinished = confirm('Do you want to quit?');
}

console.log('Done!');