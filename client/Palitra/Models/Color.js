'use strict';
 function Color () {
 	var color = '',
        observer,
        self = this,
        colorCounter;
 	
    observer = new Mediator();
   
    this.setColor = function (colorData) {
        color = colorData;
    };

    this.getColor = function () {
        return color;
    };
    
    this.setColorCounter = function (colorCounterData) {
        colorCounter = colorCounterData;
    };

    this.getColorCounter = function () {
        return colorCounter;
    };

    this.resetColorCounter = function () {
        return colorCounter = 0;
    };    

    this.counterIncrease = function () {
        colorCounter = ++colorCounter;
        observer.pub('counter-increased', self);

        return colorCounter;
    }; 
    
    this.toJSON = function () {
        var colorsJSON = {
                color: this.getColor(),
                counter: this.getColorCounter(),
        };

        return colorsJSON;
    };
    
    this.sub = function (ev, fn) {
        observer.sub(ev, fn); 
    }
    return this;
}
