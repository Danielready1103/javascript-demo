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

function getNumbers(num, length) {
    let rows = [];
    for (let j = 0; j < num; j++) {
        let numbers = [];
        while (true) {
            let x = getRandomInt(1, 49);

            if (!numbers.includes(x)) {
                numbers.push(x);
            }

            if (numbers.length == length) {
                break;
            }
        }

        //排序
        numbers.sort(compare);
        rows.push(numbers);
    }

    return rows;
}

function getLottory() {
    let num = prompt('請輸入要產生幾組號碼:');
    let length = prompt('請輸入各組別支號碼數:');
    const lottoryEl = document.querySelector("#lottory")
    rows = getNumbers(num, length);

    lottoryEl.innerHTML = '';
    for (let i = 0; i < rows.length; i++) {
        result = rows[i].join(" , ");
        //console.log(result);
        lottoryEl.innerHTML += `<h3>第${i + 1}組號碼: ${result}</h3><hr>`
        //document.write(`<h3>第${i + 1}組號碼: ${result}</h3><hr>`);
    }
}

//更換標籤文字使用
const h1 = document.querySelector("h1");
//innerText
h1.innerHTML = '<u>大樂透</u>'
h1.style.color = 'blue'

const dateEl = document.querySelector(".date");
dateEl.innerText = Date();
