import { Lightning, Utils, Router } from "@lightningjs/sdk"
import { ProgressBar, Tile, } from "@lightningjs/ui-components";


export default class Home extends Lightning.Component {

    static _template() {
        return {
            rect: true,
            w: 1920, h: 1080,
            colorTop: 0xff141e30,
            colorBottom: 0xff243b55,

            Overlay: {
                rect: true,
                w: 1920,
                h: 1080,
                colorTop: 0xaa000000,
                colorBottom: 0x00000000
            },

            AppTitle: {
                x: 60, y: 40,
                text: {
                    text: '🎬 My CTV App',
                    fontSize: 40,
                    fontFace: 'Bold',
                    textColor: 0xffffffff,
                    shadow: true,
                    shadowColor: 0xff000000
                }
            },


            Thumbnails: {
                x: 100,
                y: 200,
                w: 1800,
                flex: {
                    direction: "row",
                    wrap: true,
                    justifyContent: "flex-start",
                    alignItems: "flex-start"
                },
                marging: 20,
                children: []
            },


            Footer: {
                x: 80,
                y: 1000,
                text: {
                    text: 'Powered by LightningJS',
                    fontSize: 20,
                    textColor: 0xffcccccc
                }
            }
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
                type: Tile,
                w: 400,
                h: 250,
                margin: 20,
                artwork: {
                    src: movie.img,
                    w: 350,
                    h: 250,
                    ProgressBar: {
                        type: ProgressBar,
                        w: 300,
                        progress: 0.5,
                        y: 220
                    }
                },

                metadata: {
                    title: movie.title,
                },
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


