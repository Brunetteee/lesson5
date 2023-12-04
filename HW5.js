// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!

//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let cointandReturn = (a , b) => a * b;

let res = cointandReturn(a = 13, b = 18);
console.log(res);

// - створити функцію яка обчислює та повертає площу кола з радіусом r

let circleland = (r) => r * r * Math.PI;

res = circleland(12)
console.log(res)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let returnLand = (h,r) => 2 * Math.PI * r * h;

res = returnLand(10,5 )
console.log(res)

// - створити функцію яка приймає масив та виводить кожен його елемент


let foo = (arr) => {
    for (const arrElement of arr) {
        console.log(arrElement)
    }
}
foo(['lkahd', 'nKJSf' , 'askdjq' , 'dsfa'])
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

let text =(p) => {
    document.write('<p>Lorem ipsum dolor sit amet</p>');
}
text("Lorem ipsum dolor sit amet")


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let createUlwithLi = () => {
    document.write ('<ul>')
    document.write ('<li>ahdcxz</li>')
    document.write ('<li>hsvdja</li>')
    document.write ('<li>jhsda</li>')
    document.write ('</ul>')
}
createUlwithLi()

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цик// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let  list= (text, numbers) =>{
    document.write('<ul>')
    for (let x =0 ; x < numbers;x++){
        document.write(`<li> ${text} </li>`);}
    document.write('</ul>')
}
list("Lorem ipsum dolor sit amet, consectetur.", 6)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let i=[ 45, 'hi',false];

let list2=(i) => {
    document.write('<ul>');
    for (const iElement of i) {
        document.write('<li>Lorem ipsum dolor.</li>')
    }
    document.write('</ul>')
}
list2(i)



// - створити функцію яка повертає найменьше число з масиву

let number = [43,545,12,654,723,14];

let minNum= (num) =>{
    let minNumber = num[0];
    for (const numElement of num) {
        if (numElement < minNumber){
            minNumber = numElement
        }
    }
     return minNumber;
}
console.log(minNum(number))



// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let arr = [1,2,10]
let plus = (numbers) =>{
    let sum=0;
    for (const number of numbers) {
        sum += numbers;
    }
    return sum
}

console.log(plus(arr));


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let nswap = [[11,22,33,44],0,1];

let swap = (arr,index1,index2) =>{
    
}
console.log(swap(nswap,3,6))



// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let exchange = (sumUAH,currencyValues,exchangeCurrency) =>{
    for (const curr of currencyValues) {
        if (curr.currency === exchangeCurrency){
            return sumUAH / curr.value
        }
    }
}

console.log(exchange(10000, [{currency: 'USD' ,value: 40}, {currency: 'EUR' , value: 42}] , 'USD' , 'EUR'))