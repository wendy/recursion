// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
){
  var body = document.body
  var array = [];
  // your code here
  var addElementsByClassName = function(element) {
		var elementClassList = element.classList;
	  if (elementClassList === undefined || elementClassList.length === 0) {
		} else {
			for(var i = 0; i < elementClassList.length; i++) {
				if (elementClassList[i] === className) {
					array.push(element);
				}
			}
		};

	  var elementChildNodes = element.childNodes
	  if (elementChildNodes.length > 0) {
	  	for(var i = 0; i < elementChildNodes.length; i++) {
	  		addElementsByClassName(elementChildNodes[i]);
	  	}
	  }; 
  };
  
  addElementsByClassName(body);
  return array;
};