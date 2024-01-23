//計算BMI涵式
function getBmi(height, weight) {
    let bmi = weight / (height / 100) ** 2;

    if (isNaN(bmi)) {
        return "數值錯誤";
    }

    //小數點第幾位
    return bmi.toFixed(2);
}

//宣告變數let優於var
let height = prompt('請輸入身高:');
let weight = prompt('請輸入體重:');
//字串+數字(自串串接)
bmi_result = getBmi(height, weight)

let result = "<ul>"
result += "<li>身高:" + height + "</li>"
result += "<li>體重:" + weight + "</li>"
result += "<li>BMI:" + bmi_result + "</li>"
//輸出到網頁，可以帶入標籤語法
result += "</ul>"

document.write(result)
console.log(height, weight, bmi_result);