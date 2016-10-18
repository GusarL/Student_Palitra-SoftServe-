'use strict';
function PalitraController () {
    var colorsCollection,
        colorCounter,
        colorsList,
        colorBox;
   	
	colorsCollection = new ColorsContainer();
    	
	colorsList = new ColorsListView({collection: colorsCollection});
    colorBox = new ColoredView({collection: colorsCollection});
    colorCounter = new StatisticView({collection: colorsCollection});
    
    $('.colorListView').append(colorsList.render().el);
    $('.coloredView').append(colorBox.render().el);
    $('.statisticView').append(colorCounter.render().el); 
    
    return this;
}