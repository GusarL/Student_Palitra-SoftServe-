'use strict';

function createStatisticHTML (entities) {
	var tpl;
	
	// entities.forEach(createLi); 
 
	// function createLi (elem) {
		tpl = '<span class="count">0</span>';
        // tpl = tpl.replace(/:color/g, elem.getColor()); 
	// }
	
	return tpl;
};

// function createStatisticHTML (entities) {
// 	var tpl = '<ul>';
	
// 	entities.forEach(createLi); 
 
// 	function createLi (elem) {
// 		tpl += '<li class=":color">:color - <span>0</span></li>';
//         tpl = tpl.replace(/:color/g, elem.getColor()); 
// 	}
	
// 	return tpl + '</ul>';
// };
