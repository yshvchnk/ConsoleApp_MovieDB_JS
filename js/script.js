/* Задание на урок 1:
1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'
2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false
3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }
Проверить, чтобы все работало без ошибок в консоли 

Задание на урок 2:
1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
str.length - и получить её длину)
3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
4) Потренироваться и переписать цикл еще двумя способами

Задание на урок 3:
1) Первую часть задания повторить по уроку
2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы
3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres
P.S. Функции вызывать не обязательно 
*/

'use strict';

let numberOfFilms;

// Question about number of watched films
function start() {
    numberOfFilms = +prompt('How many films have you watched?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many films have you watched?', '');
    }
}

start();

// Main DB
const personalMovieDatabase = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

// Question about latest movies watched and records to DB
function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('What is the latest movie you watched?', '');
        const b = +prompt('Rate it, please', '');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDatabase.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }   
    }
}

rememberMyFilms();

// let i = 0;
// while (i < 2) {
//     const a = prompt('What is the latest movie you watched?', '');
//     const b = +prompt('Rate it, please', '');
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDatabase.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }   
//     i++;
// }

// Do While Cycle
// let i = 0;
// do {
//     i++;
//     const a = prompt('What is the latest movie you watched?', '');
//     const b = +prompt('Rate it, please', '');
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDatabase.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// } while (i < 2);


// Detection persomal level movie watcher
function detectPersonalLevel() {
    if (personalMovieDatabase.count < 10) {
        console.log('You`ve watched small number of films');
    } else if (personalMovieDatabase.count >= 10 && personalMovieDatabase.count < 30) {
        console.log('You`re classical viewer');
    } else if (personalMovieDatabase.count >=30) {
        console.log('You`re real movie lover');
    } else {
        console.log('Error');
    }
}

detectPersonalLevel();

// Show DB if not hidden
function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDatabase);
    }
}

showMyDB(personalMovieDatabase.private);

// Question about fave genres watched and records to DB
function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDatabase.genres[i - 1] = prompt(`Your favourite genre number ${i}`, '');
    }
}

writeYourGenres();

