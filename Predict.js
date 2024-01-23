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

for (let i = 0; i < rows.length; i++) {
    result = rows[i].join(" , ");
    console.log(result);
    document.write(`<h3>第${i + 1}組號碼: ${result}</h3><hr>`);
}
