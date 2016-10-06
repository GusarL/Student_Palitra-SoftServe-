'use strict';
function ColoredView (coloredViewContainer) {
    var coloredFrame;

    coloredFrame = document.createElement('div');
    coloredFrame.classList.add('coloredView');
    
    this.getElement = function() {
        return coloredFrame;
    };

    function renderColoredView (color) {
    	clearColor(coloredFrame);
        coloredFrame.classList.add(color.getColor());
    };

    mediator.sub('color-selected', renderColoredView);

    function clearColor (elem) {
        [].forEach.call(elem.classList, function (item) {
            if (item !== 'coloredView') {
                elem.classList.remove(item);     
            }
        });
    }

    return this;
}