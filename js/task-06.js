// Задача 6-7
// reduce
// Получи общую сумму баланса (сумму значений свойства balance) 
// всех пользователей.

// Используй деструктурирующее присваивание для параметра функции 
// {balance} без пробелов и переносов на новую строку

// Используй только перебирающие методы массива которые не изменяют 
// (не мутируют) исходный массив. Т.е. нельзя использовать for, splice, push и т.п. мутирующие методы.

// Write code under this line
const getUsersWithAge = (array, min, max) => array
    .filter(
        ({age}) => (age > min && age < max)
    )
    .map(
        ({name, email}) => ({name, email})
    );

// console.log(getUsersWithAge(users, 20, 30));
/* [
    { name: 'Ross Vazquez', email: 'rossvazquez@xinware.com' },
    { name: 'Elma Head', email: 'elmahead@omatom.com' },
    { name: 'Carey Barr', email: 'careybarr@nurali.com' }
] */

// console.log(getUsersWithAge(users, 30, 40));
/* [
    { name: 'Moore Hensley', email: 'moorehensley@indexia.com' },
    { name: 'Sharlene Bush', email: 'sharlenebush@tubesys.com' },
    { name: 'Blackburn Dotson', email: 'blackburndotson@furnigeer.com' },
    { name: 'Sheree Anthony', email: 'shereeanthony@kog.com' }
] */
