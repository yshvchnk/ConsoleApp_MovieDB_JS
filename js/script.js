'use strict';


// Main DB
const personalMovieDatabase = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function() {
        personalMovieDatabase.count = +prompt('How many films have you watched?', '');
        while (personalMovieDatabase.count == '' || personalMovieDatabase.count == null || isNaN(personalMovieDatabase.count)) {
            personalMovieDatabase.count = +prompt('How many films have you watched?', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('What is the latest movie you watched?', '').trim();
            const b = +prompt('Rate it, please', '');
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDatabase.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDatabase.count < 10) {
            console.log('You`ve watched small number of films');
        } else if (personalMovieDatabase.count >= 10 && personalMovieDatabase.count < 30) {
            console.log('You`re classical viewer');
        } else if (personalMovieDatabase.count >=30) {
            console.log('You`re real movie lover');
        } else {
            console.log('Error');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDatabase);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDatabase.private) {
            personalMovieDatabase.private = false;
        } else {
            personalMovieDatabase.private = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 2; i++) {
            let genre = prompt(`Write your favourite genres number using ,`).toLowerCase();
            if (genre === '' || genre === null) {
                console.log('Wrong data or no data');
                i--;
            } else {
                personalMovieDatabase.genre = genre.split(', ');
                personalMovieDatabase.genre.sort();
            }
        }
        personalMovieDatabase.genre.forEach((item, i) => {
            console.log(`Favourite genre ${i + 1} is ${item}`);
        });
    }
};



