'use strict';
function PalitraController () {
    var colorsCollection,
        containerPalitra,
        colorCounter,
        colorsList,
        colorBox;
   	
	colorsCollection = new ColorsContainer();
    	
	containerPalitra = document.getElementById('containerPalitra');
   
    colorsList = new ColorsListView({collection: colorsCollection});
    $('.colorListView').append(colorsList.render().el);
              
    colorBox = new ColoredView({collection: colorsCollection});
    $('.coloredView').append(colorBox.render().el);
        
    colorCounter = new StatisticView({collection: colorsCollection});
    $('.statisticView').append(colorCounter.render().el); 
    
    return this;
}