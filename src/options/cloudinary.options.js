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
}
