// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function(obj){
  //console.log(arguments);
  if(typeof obj == "string"){
    obj = '"' + obj + '"';
    return obj;
  }
  if(obj != null){
  	// -- Array conversion:
    if(Array.isArray(obj)){
      for(var i = 0; i < obj.length; i++){
        obj[i] = stringifyJSON(obj[i]);
      }
      return "[" + obj + "]";
    } else if (typeof obj == "number") {
      return obj.toString();
    // -- Object conversion:
    } else if (!(obj instanceof Array) && typeof obj == "object"){
    	var counter = 0;
    	var elementArray = Object.keys(obj);
    	for (var elem in obj){
    		elementArray[counter] = stringifyJSON(elementArray[counter]) + ":" + stringifyJSON(obj[elem]);
        counter++;
    	}
    	return "{" + elementArray + "}";
    } else {
      return obj.toString();
    }
  } else {
    return "null";
  }
}
