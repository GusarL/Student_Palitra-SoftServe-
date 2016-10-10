'use strict';
function ColorsListView (colorsCollection) {
	var colorsListFrame;
           
    colorsCollection.sub('collection-inited', render);
    colorsListFrame = document.createElement('div');
    colorsListFrame.classList.add('colorListView');
  
    function render (colorsCollection) {
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
   
    this.getElement = function() {
        return colorsListFrame;
    }; 

    return this;
}