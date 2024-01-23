//涵式宣告
function getRandomInt(start, end) {
    let x = Math.floor(Math.random() * end) + start;
    return x;
}

function compare(a, b) {
    //升序排列
    return a - b;
    //降序排列
    //return b - a
}

document.write(Date() + "<hr>")

let rows = [];
for (let j = 0; j < 5; j++) {
    let numbers = [];
    while (true) {
        let x = getRandomInt(1, 49);

        if (!numbers.includes(x)) {
            numbers.push(x);
        }

        if (numbers.length == 6) {
            break;
        }
    }

    //排序
    numbers.sort(compare);
    rows.push(numbers);
}

//排序 numbers.sort(compare); rows.push(numbers); } //輸出樂透號碼到畫面
console.log(rows);

const lottoryE1 = document.querySelector("#lottory")
for (let i = 0; i < rows.length; i++) {
    result = rows[i].join(" , ");
    console.log(result);
    lottoryE1.innerHTML += `<h3>第${i + 1}組號碼: ${result}</h3><hr>`
    //document.write(`<h3>第${i + 1}組號碼: ${result}</h3><hr>`);
}

//更換標籤文字使用
const h1 = document.querySelector("h1");

console.log(h1, lottoryE1);
//innerText
h1.innerHTML = '<u>大樂透</u>'
h1.style.color = 'blue'
