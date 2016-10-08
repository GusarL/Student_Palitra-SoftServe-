'use strict';
function Container () {
    var colors = [],
        observer;
	
    observer = new Mediator();
   
    this.initContainer = function (dataColors) {
    
        dataColors.forEach(function (elem, i) {
            var item = new Color();
                         
            item.set('color', elem);
            item.set('colorCounter', 0);
                       
            colors.push(item);
        });
    }; 

	this.forEach = function (iterator){
        colors.forEach(iterator);    
    };
    
    this.sub = function (ev, fn) {
        observer.sub(ev, fn); 
    }

    return this;
}