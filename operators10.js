/* Объединение объектов с помощью "..." */

const buttonInfo = {
    text: "Buy"
}

const buttonStyle = {
    color: "yellow",
    width: 200,
    height: 300
}

const button = {
    ...buttonInfo,
    ...buttonStyle
}

console.table(button);

/* Вывод: т.е. с помощью оператора "..." мы как бы собрали все 
свойства из двух объектов в одном новом объекте "button". */