'use strict';
function OneStatisticView (colorsCollectionEntity) {
	var staticticElement;
	
    colorsCollectionEntity.sub('counter-increased', changeStatistic);
    createElement();

	function createElement () {
        staticticElement = document.createElement('li');
        staticticElement.className = colorsCollectionEntity.get('color');
        staticticElement.innerHTML = colorsCollectionEntity.get('color') + ' - ' + createStatisticHTML(colorsCollectionEntity);
       
        changeStatistic(colorsCollectionEntity);
    } 

    function changeStatistic (colorsCollectionEntity) {
        var count = staticticElement.querySelector('.count');

        count.innerHTML = colorsCollectionEntity.get('colorCounter');
    }
        
    this.getElement = function() {
        return staticticElement;
    };

    return this; 
}