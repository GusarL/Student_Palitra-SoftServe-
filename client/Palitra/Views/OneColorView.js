'use strict';
function OneColorView (colorsCollectionEntity) {
	var colorElement;
	    
	colorElement = document.createElement('li');
    colorElement.className = colorsCollectionEntity.get('color');
    colorElement.innerHTML = colorsCollectionEntity.get('color').toUpperCase();

    colorElement.addEventListener('click', function () {
        var increasedCounter;

        mediator.pub('color-selected', colorsCollectionEntity);
        increasedCounter = colorsCollectionEntity.counterIncrease();
        colorsCollectionEntity.set('colorCounter', increasedCounter);

    }, false);
    
    this.getElement = function() {
        return colorElement;
    };

    return this; 
}