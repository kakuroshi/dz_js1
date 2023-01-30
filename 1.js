let number = 324
let f_figure = Math.floor(number / 100)
let two_figures = number / 10
let s_figure = Math.floor(two_figures % 10)
let t_figure = number % 10
console.log("Первая цифра:", f_figure)
console.log("Вторая цифра:", s_figure)
console.log("Третья цифра:", t_figure)