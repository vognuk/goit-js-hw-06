// Задача 6-2
// filter
// Получи массив объектов пользователей, отобранный по цвету глаз (свойство eyeColor), используя деструктурирующее присваивание для параметра функции ({eyeColor}) без пробелов и переносов на новую строку.

// Используй только перебирающие методы массива которые не изменяют (не мутируют) исходный массив. Т.е. нельзя использовать for, splice, push и т.п. мутирующие методы.

// Деструктурирующее присваивание для параметра функции
// PS Деструктурирующее присваивание (ДП):

// Объект как параметр без ДП
// const object = {num : 2}
// function getNum (obj) { return obj.num; }
// console.log(getNum(object)) // 2
// ДП
// const object = {num : 2}
// // const num  =  object.num;
// const { num } = object;
// console.log(num) // 2
// Объект как параметр c ДП
// const object = {num : 2}
// //function getNum (obj) { return obj.num; }
// function getNum ({num}) { return num; }
// console.log(getNum(object)) // 2

// Write code under this line
const getUsersWithEyeColor = (array, color) =>
  array.filter(({eyeColor}) => eyeColor === color);

// console.log(getUsersWithEyeColor(users, 'blue'));
/* [
  {
    id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  }
] */
