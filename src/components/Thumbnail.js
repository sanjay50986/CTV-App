import { Lightning } from "@lightningjs/sdk"
export default class Thumbnail extends Lightning.Component {
    static _template() {
        return {
            w: 300,
            h: 200,
            rect: true,
            Img: {
                w: 300,
                h: 200,
                visible: false
            },
            Label: {
                x: 20, y: 20,
                text: { text: '', fontSize: 25, textColor: 0xffffffff }
            },

            FocusBorder: {
                rect: true,
                w: 308, h: 208, x: -4, y: -4,
                alpha: 0,
                shader: { radius: 20 }
            },

        }
    }

    set label(text) { this.tag("Label").text.text = text }
    set img(img) {
        if (img) {
            this.tag('Img').src = img;
            this.tag("Img").visible = true;
        } else {
            this.tag("Img").visible = false;
        }
    }


    _focus() {
        this.patch({
            smooth: { scale: 1.12 },
        });

    }

    _unfocus() {
        this.patch({
            smooth: { scale: 1 },
        });

    }
}
