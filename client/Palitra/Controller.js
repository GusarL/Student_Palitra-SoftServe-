'use strict';
function PalitraController () {
    var dataColors = ['blue', 'green', 'red'],
        colorsCollection,
        containerPalitra,
        colorCounter,
        colorCounterSet,
        colorsList,
        colorsSet,
        colorBox;
   	
	colorsCollection = new Container();
	colorsCollection.initContainer(dataColors);

	containerPalitra = document.getElementById('containerPalitra');

	colorsList = new ColorsListView();
    colorsSet = colorsList.render(colorsCollection);
    containerPalitra.appendChild(colorsSet);
   
    colorBox = new ColoredView();
    containerPalitra.appendChild(colorBox.getElement());
    
    colorCounter = new StatisticView(colorsCollection);
    colorCounterSet = colorCounter.render(colorsCollection);
   	containerPalitra.appendChild(colorCounter.getElement()); 

    return this;
}