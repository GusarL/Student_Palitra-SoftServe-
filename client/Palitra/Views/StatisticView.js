'use strict';
function StatisticView (colorsCollection) {
	var statisticViewFrame;

    statisticViewFrame = document.createElement('div');
    statisticViewFrame.classList.add('statisticView');
       
    this.render = function (colorsCollection) {
        var parentElem;
                   
        parentElem = document.createElement('ul');
              
        colorsCollection.forEach(function (elem) {   
            var item;
         
            item = new OneStatisticView(elem);
            parentElem.appendChild(item.getElement());
        });
        
        statisticViewFrame.appendChild(parentElem);

        return statisticViewFrame;
    }

    this.getElement = function() {
        return statisticViewFrame;
    };

     function renderCounters (colorsCollectionEntity) {
		var colorSpan,
	        colorLi;
	     
	    colorLi = statisticViewFrame.querySelector('.' + colorsCollectionEntity.get('color'));
	    colorSpan =  colorLi.querySelector('span');
        colorSpan.textContent = colorsCollectionEntity.set('colorCounter', colorsCollectionEntity.counterIncrease()); 
	}

	return this;
}