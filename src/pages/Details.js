import { Lightning, Router } from "@lightningjs/sdk";
import { Button } from "@lightningjs/ui-components";

export default class Details extends Lightning.Component {

    static _template() {
        return {
            Background: {
                rect: true,
                w: 1920,
                h: 1080,
                colorTop: 0xff1a1a2e,
                colorBottom: 0xff16213e,
            },

            Overlay: {
                rect: true,
                w: 1920,
                h: 1080,
                colorTop: 0xaa000000,
                colorBottom: 0x00000000
            },

            BackButton: {
                x: 100,
                y: 40,
                type: Button,
                title: '←',
                fixed: true,
                justify: 'center',
                w: 80,
                h: 40,
                backgroundColor: 0xffffffff,
                radius: 10,
                mode: 'focused',
            },

            ContextRow: {
                x: 100,
                y: 120,
                w: 1720,
                h: 800,
                flex: {
                    direction: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start'
                },

                DetailsColumn: {
                    flex: {
                        direction: 'column',
                    },

                    Title: {
                        text: {
                            text: '',
                            fontSize: 64,
                            fontFace: 'Bold',
                            textColor: 0xffffffff
                        }
                    },

                    Author: {
                        text: {
                            text: '',
                            fontSize: 30,
                            fontFace: 'Medium',
                            textColor: 0xffffffff
                        }
                    },

                    ReleaseDate: {
                        text: {
                            text: '',
                            fontSize: 30,
                            textColor: 0xffbbbbbb
                        }
                    },

                    Description: {
                        w: 600,
                        text: {
                            text: '',
                            fontSize: 30,
                            lineHeight: 30,
                            wordWrap: true,
                            maxLines: 4,
                            textColor: 0xffcccccc
                        }
                    },
                },

                ImageBox: {
                    w: 630,
                    h: 400,
                    src: null,
                    texture: true
                },
            },

            WatchButton: {
                x: 100,
                y: 440,
                type: Button,
                title: '▶ Watch Now',   
                fixed: true,
                w: 300,
                h: 80,
                justify: 'center',
                fontSize: 25,   
                backgroundColor: 0xffe50914,  
                radius: 20
            },

        };
    }

    set params(selectedMovie) {
        this.tag('Title').text.text = selectedMovie?.title || 'No Title';
        this.tag('ContextRow.ImageBox').src = selectedMovie?.img || '';
        this.tag('Author').text.text = selectedMovie?.author
            ? `Director: ${selectedMovie.author}`
            : '';
        this.tag('ReleaseDate').text.text = selectedMovie?.releaseDate
            ? `Released: ${selectedMovie.releaseDate}`
            : '';
        this.tag('Description').text.text = selectedMovie?.description || '';
    }

}
