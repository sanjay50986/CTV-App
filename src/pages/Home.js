import { Lightning, Utils, Router } from "@lightningjs/sdk"
import Thumbnail from '../components/Thumbnail'

export default class Home extends Lightning.Component {

    static _template() {
        return {
            rect: true,
            w: 1920, h: 1080,
            color: 0xff222222,

            AppTitle: {
                x: 60, y: 40,
                text: {
                    text: 'My CTV App',
                    fontSize: 20
                }
            },

            Thumbnails: {
                x: 60,
                y: 120,
                w: 1800,
                flex: {
                    direction: "row",
                    wrap: false,
                    justifyContent: 'space-between',
                    alignItems: 'center'
                },
                children: []
            },

        }
    }

    _index = 0;
    _movies = []

    async _init() {
        await this.fetchMovies()
    }


    async fetchMovies() {
        try {
            const url = Utils.asset('data/movies.json')
            const res = await fetch(url)
            const data = await res.json()

            const thumbnails = data.map((movie) => ({
                type: Thumbnail,
                label: movie.title,
                img: movie.img,
            }));

            this._movies = data

            this.tag('Thumbnails').patch({ children: thumbnails })
            this._refocus();
        } catch (e) {
            console.error("Failed to fetch movies:", e)
        }
    }

    _getFocused() {
        return this.tag('Thumbnails').children[this._index]
    }

    _handleLeft() {
        if (this._index > 0) {
            this._index--;
            this._refocus();
        }
    }

    _handleRight() {
        if (this._index < this.tag('Thumbnails').children.length - 1) {
            this._index++;
            this._refocus();

        }
    }

    _handleEnter() {
       const selectedMovie = this._movies[this._index];
       Router.navigate('details', selectedMovie)
    }


}


