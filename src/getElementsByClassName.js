// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
	var results = [];
	$("*").each(function(){
		if($(this).attr("class") != undefined){
			var thisClass = $(this).attr("class").split(" ");
			for(var i = 0; i < thisClass.length; i++){
				if(thisClass[i] == className){
					results.push($(this).context);
					break;
				}
			}
		}
	});
	return results;
};
