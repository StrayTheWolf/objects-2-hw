'use strict'


console.log('Проверка на псевдомассив объекта 1')

let user = {
    0: 'Mike',
    1: 'Smith',
    2: 'mikesmith@hmail.com',
    length: 3
}

function checkObj(object) {
    return user.hasOwnProperty('length'); // проверяем если у объекта есть свойство lenght значит пвсевдомассив - вернем(true)
}

console.log(checkObj(user));


console.log('Проверка на итерируемый объект 2')
let user2 = {
    name: 'Alex',
    lastName: 'White',
    email: 'alex007@gmail.com',
    [Symbol.iterator]() {
        return {
            name: this.name,
            lastName: this.name,
            email: this.email,
            next() {

            }
        }
    }
}

function checkObj2(object) {
    return !!Object.getOwnPropertySymbols(object); // проверяем если у объекта  symbol значит итерируемый объект вернем(true)
}

console.log(checkObj2(user2));

const characters = [
    {'name': 'barney', 'age': 36},
    {'name': 'fred', 'age': 40},
    {'name': 'john', 'age': 40},
    {'name': 'ildar', 'age': 32}
];

function showUniqueValue(obj, key) {

    let searchItem = key;
    let findedElements = [];

    for (let i = 0; i < obj.length; i++) {
        findedElements.push(obj[i].name + ' ');
    }
    console.log(findedElements);

}

showUniqueValue(characters, 'name');


console.log("Число свойств в объекте")

let var1 = { a: 1, b: 2 };

let var2 = function () {

};

let var3 = [1, 2, 3];

let var4 = [];
var4[100] = 1;

function getPropertyCount(obj){
    let object = obj
    let counter = 0;

    for (let key in obj){
        counter++;
    }
    return counter; // вовзращаем количество свойств в объекте
}

console.log(getPropertyCount(var1));
console.log(getPropertyCount(var2));
console.log(getPropertyCount(var3));
console.log(getPropertyCount(var4));


console.log('Функция конструктор POST')

let post = {} // объект пост

Object.defineProperties(post, {
    'title':{
        value: 'Официально: ремейк первой «Готики» выйдет',
        writable: true,
        enumerable: true,
        configurable: false
    },
    'text':{
        value: 'За разработку отвечает испанское подразделение THQ Nordic. Первоочередная задача команды — проанализировать сильные и слабые стороны интерактивного тизера: «Одной из самых популярных просьб было сделать мир более суровым и мрачным». \n' +
            '\n' +
            '«Мы готовы к созданию полноценного ремейка Gothic, который останется максимально верным оригиналу, придаст миру игры современный вид и улучшит некоторые геймплейные механики», — пообещал директор по разработке и развитию бизнеса THQ Nordic Рейнхард Поллис (Reinhard Pollice).',
        writable: true,
        enumerable: true,
        configurable: false
    }
})

Object.defineProperties(post, {
    'published':{
        writable: false,
        configurable: false
    },
    'deleted':{
        writable: false,
        configurable: false
    }
})



Object.defineProperty(post,'title',{
    writable: true,
    enumerable: true,
    configurable: false
})





function Post (title, text, published_at, published, deleted){
    this.title = title;
    this.text = text;
    this.published_at = published_at;
}


