// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (obj === null){
    return 'null';
  } else if (typeof obj === "function" || obj === undefined) {
    return undefined;
  } else if (typeof obj === "string"){
    return '"' + obj + '"';
  } else if (Array.isArray(obj)){
    var array = [];

    for (var i = 0; i < obj.length; i ++) {
      array.push(stringifyJSON(obj[i]));
    }

    return '[' + array.join(',') + ']';
  } else if (typeof obj === 'object'){
    var array = [];

    for (var key in obj) {
      if (obj[key] === undefined || typeof obj[key] === "function") {
        delete obj[key];
      } else {
        array.push('"' + key + '":' + stringifyJSON(obj[key]));
      }
    }

    return '{' + array.join(',') + '}';
  } else {
    return obj.toString();
  }
};



