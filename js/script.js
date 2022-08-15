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

*/

'use strict';

const numberOfFilms = +prompt('How many films have you watched?', '');

const personalMovieDatabase = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

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

// While cycle
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

if (personalMovieDatabase.count < 10) {
    console.log('You`ve watched small number of films');
} else if (personalMovieDatabase.count >= 10 && personalMovieDatabase.count < 30) {
    console.log('You`re classical viewer');
} else if (personalMovieDatabase.count >=30) {
    console.log('You`re real movie lover');
} else {
    console.log('Error');
}

console.log(personalMovieDatabase);
