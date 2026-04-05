class Api {
    /**
     * 
     * @param {string} url 
     */
    constructor(url) {
        this._url = url
    }

    async get() {
        /*return fetch(this._url)
            .then(res => res.json())
            .then(res => res.data)
            .catch(err => console.log('an error occurs', err))
            */
           const data = require("../data/old-movie-data.json");
           return data;
    }
}


class MovieApi extends Api {
    /**
     * 
     * @param {string} url 
     */
    constructor(url) {
        super(url)
    }

    async getMovies() {
        return await this.get()
    }
}

class OldMovie {
    constructor(data) {
        this._duration = data.duration
        this._picture = data.picture
        this._released_in = data.released_in
        this._synopsis = data.synopsis
        this._title = data.title
    }

    get duration() {
        return this._duration
    }

    get picture() {
        return `/assets/${this._picture}`
    }

    get thumbnail() {
        return `/assets/thumbnails/${this._picture}`
    }

    get released_in() {
        return this._released_in
    }

    get synopsis() {
        return this._synopsis
    }

    get title() {
        return this._title
    }
}

class App {
    constructor() {
        // this.$moviesWrapper = document.querySelector('.movies-wrapper')
        this.moviesApi = new MovieApi('./data/old-movie-data.json');
    }

    async main() {
        const moviesData = await this.moviesApi.getMovies();
        console.log(moviesData)
        moviesData.data.map((movie) => new OldMovie(movie))
            .forEach(movie => {
                //const template = new MovieCard(movie)
                //this.$movieWrapper.appendChild(
                //template.createMovieCard
                //)
                console.log(movie);
            });
    }
}

const app = new App();
app.main();