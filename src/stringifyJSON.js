// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (nullstringcheck(obj)) {
    return nullstring(obj); 
  } else if (Array.isArray(obj)){
  	return stringifyArray(obj);
  } else if (typeof obj === 'object'){
  	return stringifyObj(obj)
  } else {
  	return obj.toString();
  }
};

var stringifyObj = function(obj) {
  for (var key in obj) {
  	if (nullstringcheck(obj[key])) {
    	if (obj[key] === undefined) {
    		delete obj[key];
    	}else if (typeof obj[key] === "function") {
        delete obj[key];
    	} else {
  	    obj[key] = nullstring(obj[key]);
  	  }
  	}
  	if (typeof obj[key] === 'object' && obj[key] !== null) {
      if (Array.isArray(obj[key])) {
        obj[key] = stringifyArray(obj[key]);
      } else {
        stringifyObj(obj[key]); 
        obj[key] = hash(obj[key]);
      }
    }
    
  }
obj = hash(obj);
return obj;
}

var hash = function (obj) {
  var array =[];
  for (var key in obj) {
    array.push('"' + key + '":' + obj[key]);
  }
  return '{' + array.join(',') + '}';
}

var stringifyArray = function(arr) {
	for (var i = 0; i < arr.length; i ++) {
		if (nullstringcheck(arr[i])) {
			arr[i] = nullstring(arr[i]);
		}
	  if (Array.isArray(arr[i])) {
	    stringifyArray(arr[i]);
	    arr[i] = '[' + arr[i].join(',') + ']';
		} else if (typeof arr[i] === 'object') {
			arr[i] = stringifyObj(arr[i]);
		}
	}

	return '[' + arr.join(',') + ']';
  
};

var nullstringcheck = function(element) {
  if (typeof element === "function") {
    return true;
  } else if (element === null){
    return true;
  } else if (typeof element === "string"){
  	return true;
  } else if (element === undefined) {
    return true;
  } else if (element[0] === '{' || element[0] === '[') {
  	return false;
  } else{
  	return false;
  }
};

var nullstring = function(element){
  if (element === null){
    return "null";
  } else if (element === undefined) {
    return "";
  } else if (typeof element === "function") {
    return "";
  } else {
  	return '"' + element + '"';
  }
};


