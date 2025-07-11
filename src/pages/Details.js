import { Lightning, Router } from "@lightningjs/sdk";

export default class Details extends Lightning.Component {

    static _template() {
        return {
            Background: {
                rect: true,
                w: 1920,
                h: 1080,
                color: 0xff222222,
                Image: {
                    w: 1920,
                    h: 1080,
                    src: null,
                }
            },

            Overlay: {
                rect: true,
                w: 1920,
                h: 300,
                y: 0,
                colorTop: 0xaa000000,
                colorBottom: 0x00000000,
            },

            Title: {
                x: 900,
                y: 100,
                text: {
                    text: '',
                    fontSize: 64,
                    fontFace: 'Bold',
                    textColor: 0xffffffff,
                }
            },

            BackButton: {
                x: 50,
                y: 50,
                text: {
                    text: '← Back',
                    fontSize: 32,
                    textColor: 0xffffffff,
                }
            }
        }
    }

    set params(selectedMovie) {
        this.tag('Title').text.text = selectedMovie?.title
        this.tag('Background.Image').src = selectedMovie?.img
    }


}