function ucFirst(string) {
    if (string.length > 0) {
      return string[0].toUpperCase() + string.substring(1);
    } else {
      return string;
    }
  }
  
function capitalize(string) {
    return string.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

function camelCase(string) {
    if(typeof string === 'string'){
        return (capitalize(string)).replace(/ /g, "");
    } else {
        return "";
    }
}

function snakeCase(string) {
    return string.replace(/ /g, "_").toLowerCase();
}

function leet(string) {
    var array = { "A" : "4", "E" : "3", "I" : "1", "O" : "0", "U" : "(_)", "Y" : "7"};
    var result = "";
    for( i=0; i<string.length; i++) {
        if(typeof array[string[i].toUpperCase()] === 'undefined') {
            result += string[i]; 
        } else {
            result += array[string[i].toUpperCase()];
        }
    }
    return result;
}

function propAccess(string) {
    var array = {
        "prop_access" : {
            "property" : {
                "animals" : {
                    "type" : {
                        "name" : "dog",
                    }
                }
            }
        }
    }
}

// console.log(ucFirst('hello world'));
// console.log(capitalize('hello world'));
// console.log(camelCase('hello world'));
// console.log(snakeCase('hello world'));
// console.log(leet('aeiouy'));
