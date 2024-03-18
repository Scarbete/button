// создаем переменную button внутри которого хранятся все кнопки
// document.querySelectorAll это обращение к докумену html и берем элементы с названием button
const buttons = document.querySelectorAll('button')

buttons.forEach(item => {
    item.onclick = () => {
        document.body.style.backgroundColor = item.innerText
    }
})