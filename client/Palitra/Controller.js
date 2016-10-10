'use strict';
function PalitraController () {
    var colorsCollection,
        containerPalitra,
        colorCounter,
        colorsList,
        colorBox;
   	
	colorsCollection = new ColorContainer();
    colorsCollection.initContainer();
	
	containerPalitra = document.getElementById('containerPalitra');

	colorsList = new ColorsListView(colorsCollection);
    containerPalitra.appendChild(colorsList.getElement());
   
    colorBox = new ColoredView();
    containerPalitra.appendChild(colorBox.getElement());
    
    colorCounter = new StatisticView(colorsCollection);
   	containerPalitra.appendChild(colorCounter.getElement()); 

    return this;
}