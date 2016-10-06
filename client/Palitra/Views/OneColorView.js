'use strict';
function OneColorView (colorsCollectionEntity) {
	var colorElement;
	    
	colorElement = document.createElement('li');
    colorElement.className = colorsCollectionEntity.getColor();
    colorElement.innerHTML = colorsCollectionEntity.getColor().toUpperCase();

    colorElement.addEventListener('click', function () {
        mediator.pub('color-selected', colorsCollectionEntity);
        colorsCollectionEntity.counterIncrease();
    }, false);
    
    this.getElement = function() {
        return colorElement;
    };

    return this; 
}