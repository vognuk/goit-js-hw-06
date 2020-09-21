// Задача 6-5
// find
// Получи объект пользователя (не массив) по уникальному значению свойства email.

// Используй деструктурирующее присваивание для параметра функции ({email}) 
// без пробелов и переносов на новую строку.

// Используй только перебирающие методы массива которые не изменяют (не мутируют) 
// исходный массив. Т.е. нельзя использовать for, splice, push и т.п. мутирующие методы.

// Write code under this line
const getUserWithEmail = (array, mail) =>
  array.find(
    ({email}) => 
    email === mail
    );

// console.log(getUserWithEmail(users, 'rossvazquez@xinware.com'));

/* {
    id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
} */

// console.log(getUserWithEmail(users, 'blackburndotson@furnigeer.com'));

/* {
    id: '150b00fb-dd82-427d-9faf-2879ea87c695',
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
} */
