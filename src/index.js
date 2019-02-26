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
        if (newArr[i] == "{" && newArr[i + 1] == "}" || newArr[i] == "(" && newArr[i + 1] == ")" || newArr[i] == "[" && newArr[i + 1] == "]" || newArr[i] == "|" && newArr[i + 1] == "|") {
            newArr.splice(i, 2);
            i=i-2;

        }
    }
    if (newArr.length == 0) {
        return true;
    } else {
        return false;
    }


}
