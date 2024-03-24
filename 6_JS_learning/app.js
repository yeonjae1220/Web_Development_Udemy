let age = 26;
let userName = "Max";
let hobbies = ["Sports", "Cooking", "Reading"];

let job = {
  title: "Developer",
  place: "New York",
  salary: 50000,
};

let totalAdultYears;

function calculateAdultYears(userAge) {
  return userAge - 18;
}

//let adultYear = age - 18;
totalAdultYears = calculateAdultYears(age);
//alert(totalAdultYears);
console.log(totalAdultYears);

age = 56;
totalAdultYears = calculateAdultYears(age);
//alert(totalAdultYears);
console.log(totalAdultYears);

let person = {
  neam: "yeonjae",//Property
  greet() {//Method
    //alert("Hello");
    console.log("Hello");
  },
};

person.greet();


//배열, 객체 변수 꺼내오기
// alert(hobbies[0]);
// alert(job.title)

//문자열, 숫자 변수 설명
// let age = 24;
// let greetingText = "Hi I'm yeonjae!";
// alert(greetingText);
// greetingText = "i'm really yeonjae";
// alert(greetingText);
// alert(age);
