// filter и оператор !
// Получи массив только неактивных пользователей (отфильтруй по значению свойства isActive)
// Используй деструктурирующее присваивание для параметра функции ({isActive}) 
// без пробелов и переносов на новую строку.
// Используй оператор !.
// Используй только перебирающие методы массива которые не изменяют (не мутируют) исходный массив. 
// Т.е. нельзя использовать for, splice, push и т.п. мутирующие методы.

const getInactiveUsers = array => array.filter(({isActive}) => !isActive);

/* [
  {
    id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
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
  },
  {
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
  }     
]; */
