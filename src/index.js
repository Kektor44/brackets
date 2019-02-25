module.exports = function check(str, bracketsConfig) {

    var arr = bracketsConfig.join('').replace(/,/g, '');
    var newStr = str + arr;
    var newArr = newStr.split('');
//    {-1     }-2     (-3     )-4     [-5    ]-6      |-7
    var count1 = 0;
    var count2 = 0;
    var count3 = 0;
    var count4 = 0;
    var count5 = 0;
    var count6 = 0;
    var count7 = 0;

    for (var i = 0; i < newArr.length; i++) {
        if (newArr[i] == "{") {
            count1++;
        } else if (newArr[i] == "}") {
            count2++;
        } else if (newArr[i] == "(") {
            count3++;
        } else if (newArr[i] == ")") {
            count4++;
        } else if (newArr[i] == "[") {
            count5++;
        } else if (newArr[i] == "]") {
            count6++;
        } else if (newArr[i] == "|") {
            count7++;
        }
    }
    if (count1 == count2 && count3 == count4 && count5 == count6 && count7 % 2 == 0) {
        return true;
    } else {
        return false;
    }



}
