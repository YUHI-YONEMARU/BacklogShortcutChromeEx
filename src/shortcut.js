document.addEventListener('keydown',function(e){
	
	var tar    = document.querySelector('textarea');
	var str    = tar.value;
	var len    = str.length;
	var strPos = tar.selectionStart;
	var selStr = document.getSelection();
	var endPos = tar.selectionEnd;

	var bfr    = str.substr(0, strPos);
	var aft    = str.substr(endPos, len);
	
	if(e.ctrlKey){
	    switch (e.keyCode) {
	        case 66:// B 
        		var repStr = "''" + selStr + "''";
        		tar.value= bfr + repStr + aft;
	        break;
	    } 
    }
});