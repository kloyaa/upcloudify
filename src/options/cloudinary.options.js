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
    static gradient(crop = "pad") {
        return {
            effect: "gradient_fade:symmetric_pad",
            x: "0.5" ,
            background: "auto:predominant",
            crop
        };
    }
    static border({size = 5, color = "red"}) {
        return { border: `${size}px_solid_${color}`  }
    }
    static replaceColor({ original, tolerance = 80, newcolor = "red" }) {
        return { effect: `replace_color:${newcolor}:${tolerance}:${original}` }
    }
    static borderRadius({ crop = "fill", radius = 25 }) {
        return  {  crop, radius: `${radius}:0`  }
    }
    static vectorize({ corners = 40 }) {
        return {  effect: `vectorize:colors:3:corners:${corners}:detail:1.0` }
    }
    static resize({ height = 100, width = 200 }) {
        return {  height, width }
    }
}
