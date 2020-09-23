// sort и map
// Получи массив имен (поле name) людей, отсортированных в зависимости 
// от количества их друзей (поле friends)

// Избегаем мутации исходного массива: т.к. метод sort изменяет (мутирует) 
// исходный массив, то следует сделать копию массива и сортировать уже 
// копию, а не исходный массив.

// Копирование массива:

// const arr = [1, 3, 5];

// // 1
// const first = [...arr];

// // 2
// const second = arr.slice();

// // 3
// const third = arr.concat();
// Используй деструктурирующее присваивание для параметра функции ({name})` 
// без пробелов и переносов на новую строку

// Используй только перебирающие методы массива которые не изменяют (не мутируют) 
// исходный массив. Т.е. нельзя использовать for, splice, push и т.п. мутирующие методы.

import users from "./users.js";

const getNamesSortedByFriendsCount = array => [...array]
    .sort(
      (a, b) => a.friends.length - b.friends.length
    )
    .map(
      ({name}) => name
    );

console.log(getNamesSortedByFriendsCount(users)); // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]