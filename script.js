//touchstart событие возникает при касании к елементу(тапаем на елемент)
//touchmove когда нажали пальцем на екран и водим по нему
//touchend когда палец прекращает соприкасаться с поверхностью
//touchenter когда палец заходит на какой то елемент
//touchleave когда палец сошел с елемента
//touchecancel когда палец выходит за пределы

window.addEventListener('DOMContentLoaded', function(){
    let box = document.querySelector('.box');
    console.log(box);

    box.addEventListener('touchstart', function(event){
        event.preventDefault();             //event.preventDefault для отмены действия браузера
        console.log('Red box: touchstart');
        console.log(event.target);      //получаем все пальцы которые прикоснулись к сенсорной поверхности, вне зависимости от того на какой елемент они были использованы
        console.log(event.touches[0].target);     
        console.log(event.changedTouches); //показывает список объектов(пальцев) которые были задействованы нашим сенсором
        console.log(event.targetTouches); //регистрируем пальцы которые взаимодействуют с елементом

    });

    box.addEventListener('touchmove', function(event){
        event.preventDefault(); 
        console.log('Red box: touchmove');
        console.log('Red box: ' + event.touches[0].pageX); //получаем координату по оси X
    })

    // box.addEventListener('touchend', function(event){
    //     event.preventDefault(); 
    //     console.log('Red box: touchend');
    // })

    //РЕГУЛЯРНЫЕ ВЫРАЖЕНИЯ ето технология которая позволяет работать со строками
    //у самих РЕГУЛЯРНЫХ ВЫРАЖЕНИЙ есть методы, test(есть ли вообще такое совпадение) 
    //let ans = prompt ('ввидите ваше имя!');

    // i флаг регистра, ищем что то вне зависимости от регистра
    // g флаг глобальности, ищем что то глобально(в нашем случае все вводимые числа 'n')
    // m флаг многострочности

    // \d искать все числа \\D искать не число
    // \w искать все буквы \\W искать не буквы
    // \s все пробеллы   \\S искать без пробелов
    //let reg = /n/gi; //ищем по 'n', g дает массив со всеми совпадениями(то что ввели в prompt)
    //у самих РЕГУЛЯРНЫХ ВЫРАЖЕНИЙ есть методы, test(есть ли вообще такое совпадение)
    //console.log(reg.test(ans));

    //1 МЕТОД search и помещаем туда регулярное выражение
    //console.log(ans.search(reg)); //находим пременную 'n' на какой то позиции ввода
    //метод serarch всегда ищет только первое совпадение в строках по регулярным выражениям
    //2 метод флаги match
    //console.log(ans.match(reg));
    //метод match дает массив и чаще используется
    
    //let pass = prompt('введите пароль!');

    //console.log(pass.replace(/./g, '*')); //'.' Точка ето особый символ в рег. выражениях он значит, что мы будем искать либо заменять данные(любые символы которые попадут в нашу строку)
    //в нашем случае все вводимые символы заменим на *
    //alert('12-43-444'.replace(/-/g, ':')); //меняем все  - на :

    //let ans = prompt ('ввидите ЧИСЛО!');

    //let reg = /\d/g; // ищем все цифры в строке в ввиде массива получим(без g только первое число)

    //console.log(ans.match(reg));

    let str = 'My name is R2D2';

    console.log(str.match(/\w\d\w\d/i)) //вывбираем по \цифра\буква...
});