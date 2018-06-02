function getstyle(obj,name){
	if(obj.currentStyle){
		 return obj.currentStyle[name];
		}
	else{
				return getComputedStyle(obj,false)[name];
	}
}
//	样式解决浏览器取非行间样式的兼容性问题
//所用函数:obj.currentStyle.name,getComputedStyle(obj,false).name;
function getByClass(oParent,sClass){ 
	var aResult = [];
	 var aEle = oParent.getElementsByTagName('*');
	 for(var i = 0;i < aEle.length;i++){
	 	if(aEle[i].className == sClass){
	 		aResult.push(aEle[i]);
	 	}
	 }
	 return aResult;
}
//DOM获取class类名的jiedain