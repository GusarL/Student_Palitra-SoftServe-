'use strict';
function ColorsListView () {
	var colorsListFrame;

    colorsListFrame = document.createElement('div');
    colorsListFrame.classList.add('colorListView');
  
    this.render = function (colorsCollection) {
        var parentElem;
                   
        parentElem = document.createElement('ul');
        parentElem.className = 'list';
       
        colorsCollection.forEach(function (elem) {   
            var item;
         
            item = new OneColorView(elem);
            parentElem.appendChild(item.getElement());
        });
        
        colorsListFrame.appendChild(parentElem);

        return colorsListFrame;
    }

    return this;
}