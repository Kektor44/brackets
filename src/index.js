module.exports = function check(str, bracketsConfig) {
    for(var i=0; i < Math.pow(bracketsConfig.length, 2); i++) {
        bracketsConfig.forEach(function(bracketConfig) {
            var matchedStr = bracketConfig[0] + bracketConfig[1];
            while(str.contains(matchedStr)) {
                str = str.replace(matchedStr, '');
            }
        });
    }
    return str == '';
}
String.prototype.contains = function(it) { return this.indexOf(it) != -1;
}
