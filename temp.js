//宣告常數
const PI = 3.1415926;

//宣告變數let優於var
let radius = prompt('請輸入半徑:');
let area = radius * radius * PI;

//字串+數字(自串串接)
result = '面積為:' + area

//輸出到console，此為TA看
console.log(typeof (radius), area, result)

//輸出到網頁，可以帶入標籤語法
document.write("<h2>" + result + "</h2>")

//alert
alert(result)


/*  ++x:前置運算，先運算在輸出 
    x++:後置運算，先輸出在運算
*/
let email = "base30904@gmail.com"
console.log(email);
console.log(email.length);
console.log(email[email.length - 1])

for (let i = 0; i < email.length; i++) {
    console.log(i, email[i]);
}

/*
    A == B  =>  基本的比對
    A === B =>  會先針對型態進行比對再比數值
*/
console.log(10 == '10');
console.log(10 === '10');

/*
    型態轉換 Number, String, Boolean
*/
console.log(String(10) === '10');
console.log(10 === Number('10'));


//邏輯運算子
let eng = 60;
let ch = 60;
let math = 50;

if ((ch >= 60 || eng >= 60) && math >= 60) {
    console.log('pass');
}
else {
    console.log('No pass');
}

//1~10亂數
//原始random是0~1之間的浮點數
//0~10 randint(0,10)
for (let i = 0; i < 10; i++) {
    let r = Math.floor(Math.random() * 10) + 1;
    //若要看到10，使用ceil
    //let r = Math.ceil(Math.random() * 10);
    console.log(r);
}

//1~49
for (let i = 0; i < 49; i++) {
    let r = Math.floor(Math.random() * 49) + 1;
    console.log(r);
}

while (true) {
    let r = getRandomInt(1, 49);
    console.log(r);
    if (r == 49) {
        break;
    }
}

//涵式宣告
function getRandomInt(start, end) {
    let x = Math.floor(Math.random() * end) + start;
    return x;
}

x1 = 3.5;
x2 = 3.6;
document.write(parseInt(x1));
document.write(Number(x2));

let user = {
    name: "Jerry",
    height: 178,
    weight: 68.2
}

console.log(user, typeof (user));
console.log(user.name, user.height, user["weight"]);