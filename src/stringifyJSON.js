// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function(obj, isElement){
  if(typeof obj == "string"){
    obj = "\"" + obj + "\"";
    return obj;
  }
  if(obj != null){
  	// -- Array conversion:
    if(Array.isArray(obj)){
      for(var i = 0; i < obj.length; i++){
        obj[i] = stringifyJSON(obj[i], true);
      }
      return "[" + obj + "]";
    } else if (typeof obj == "number" && isElement) {
      return obj;
    // -- Object conversion:
    } else if (!(obj instanceof Array) && typeof obj == "object"){
    	counter = 0;
    	var elementArray = Object.keys(obj);
    	for (var elem in obj){
    		elementArray[counter] = stringifyJSON(elementArray[counter]) + ":" + stringifyJSON(obj[elem]);
    		counter++;
    	}
    	//console.log(elementArray);
    	return "{" + elementArray + "}";
    } else {
      return obj.toString();
    }
  } else {
    return "null";
  }
}
