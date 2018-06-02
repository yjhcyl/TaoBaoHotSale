function show()
{
var timer = null;
var obgMenu = document.getElementById('bgMenu');
var oDivMt = obgMenu.getElementsByClassName('none-menu')[0];
var oul = oDivMt.getElementsByTagName('ul')[0];
var oLi = oul.getElementsByTagName('li');
obgMenu.onmouseover = function(){
	clearTimeout(timer);
	timer = setTimeout(function(){
		oDivMt.style.display = 'block';
		obgMenu.style.background = '#fff';
		oDivMt.style.border = '1px solid #eee';
		oDivMt.style.borderTop = '0';
	},200)
	}
obgMenu.onmouseout = function(){
	timer = setTimeout(function(){
		oDivMt.style.display = '';
		obgMenu.style.background = '#F5F5F5';
	},200);
	}
for(i = 0; i < oLi.length; i++){
	oLi[i].onmouseover = function(){
		this.style.background = '#f5f5f5';
	}
	oLi[i].onmouseout = function(){
		this.style.background = '';
	}
	
	}
}
