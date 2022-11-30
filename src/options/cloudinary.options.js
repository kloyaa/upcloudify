module.exports = class Options {
    static blur() {
        return { effect: "blur:300" }
    }
    static opacity(value = 30) {
        return { effect: `opacity:${value}` }
    }
    static pixelate(value = 20) {
        return { effect: `pixelate:${value}` }
    }
    static sepia() {
        return { effect: "sepia" }
    }
    static vignette() {
        return { effect: "vignette" }
    }
    static cartoonify(value = 300) {
        return { effect: `cartoonify:${value}` }
    }

    static gradient(height = 300, width = 300, crop = "pad") {
        return {
            effect: "gradient_fade:symmetric_pad", x: "0.5" ,
            background: "auto:predominant",
            height,
            width,
            crop
        };
    }
}
