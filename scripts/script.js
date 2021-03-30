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

console.log('Вывод массива определенных свойств')

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

let var1 = {a: 1, b: 2};

let var2 = function () {

};

let var3 = [1, 2, 3];

let var4 = [];
var4[100] = 1;

function getPropertyCount(obj) {
    let object = obj
    let counter = 0;

    for (let key in obj) {
        counter++;
    }
    return counter; // вовзращаем количество свойств в объекте
}

console.log(getPropertyCount(var1));
console.log(getPropertyCount(var2));
console.log(getPropertyCount(var3));
console.log(getPropertyCount(var4));


console.log('Функция конструктор POST')


function Post(title, text, published_at, published, deleted) {

    Object.defineProperties(this, {

        'published': {

            value: published,
            writable: false,
            enumerable: true,
            configurable: false

        },
        'deleted': {

            value: deleted,
            writable: false,
            enumerable: true,
            configurable: false
        },

        'title': {

            value: title,
            writable: false,
            enumerable: true,
            configurable: false
        },

        'text': {

            value: text,
            writable: false,
            enumerable: true,
            configurable: false
        },

        'isAllow': {

            get() {
                return published === true && deleted === true;
            },

            enumerable: true,
            configurable: false

        },

        'published_at': {

            get() {
                let date = new Date(published_at);
                let fullYear = date.getFullYear()
                let hours = date.getHours();
                let minutes = date.getMinutes();
                return fullYear + ', ' + hours + ':' + minutes;
            },

            set dateNow (date) {
                this.published_at = date;
            },

            enumerable: true,
            configurable: false
        },
    })
}

let post1 = new Post('Заголовок статьи', 'Содержимое статьи', Date.now(), true, false)


console.log(post1.title);
console.log(post1.text);
console.log(post1.published_at);
post1.dateNow = '2021 01 01';
console.log(post1.isAllow);
console.log(Object.keys(post1));
console.log(post1)


console.log('Класс POST')


class Post2 {

    #published_at;

    constructor(title, text, published_at, published, deleted) {

        this.title = title;
        this.text = text;
        this.published = published;
        this.deleted = deleted;
        this.#published_at = published_at
    }

    get isAllow() {
        return this.published === true && this.deleted === true;
    }

    get published_at() {

        let timeStamp = new Date(this.#published_at);
        let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        let year = timeStamp.getFullYear();
        let month = months[timeStamp.getMonth()];
        let date = timeStamp.getDate();
        let hour = timeStamp.getHours();
        let min = timeStamp.getMinutes();
        return date + ' ' + month + ' ' + year + ' ' + hour + ':' + min;
    }

    set published_at(value) {
        return this.#published_at = value// передаем некую новую дату
    }
}

let post2 = new Post2('Заголовок статьи Класс', 'Содержимое статьи Класс', Date.now(), true, false)

console.log(post2.title);
console.log(post2.text);
console.log(post2.published_at);
post2.published_at = 109537920000 // передаем в какое то время или что то в время публикации
console.log(post2.isAllow);
console.log(Object.keys(post2));
console.log(post2)


