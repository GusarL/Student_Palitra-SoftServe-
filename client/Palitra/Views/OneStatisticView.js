'use strict';
function OneStatisticView (colorsCollectionEntity) {
	var staticticElement;
	
    colorsCollectionEntity.sub('counter-increased', changeStatistic);
    createElement();

	function createElement () {
        staticticElement = document.createElement('li');
        staticticElement.className = colorsCollectionEntity.getColor();
        staticticElement.innerHTML = colorsCollectionEntity.getColor() + ' - ' + createStatisticHTML(colorsCollectionEntity);
    } 

    function changeStatistic (colorsCollectionEntity) {
        var count = staticticElement.querySelector('.count');

        count.innerHTML = colorsCollectionEntity.getColorCounter();
    }
        
    this.getElement = function() {
        return staticticElement;
    };

    return this; 
}