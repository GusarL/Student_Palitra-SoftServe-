'use strict';
var Color = (function () {
              
                    function C () {
                        ModelSC.apply(this, null); 
                    }
                    
                    extend(C, ModelSC);

                    function _counterIncrease () {
                        var colorCounter = this.get('colorCounter');

                        colorCounter = ++colorCounter;
                        this.set('colorCounter', colorCounter);
                        observer.pub('counter-increased', self);

                        return colorCounter;
                    };

                    C.prototype.counterIncrease = _counterIncrease;
                    
                    return C;
                })();
 // function Color () {
 	// var attributes = {},
  //       observer,
  //       self = this;
         	
  //   observer = new Mediator();
    
  //   this.set = function (key, value) {
  //       attributes[key] = value;
  //   };

  //   this.get = function (key) {
                      
  //       return attributes[key];
  //   };
    
  //   this.counterIncrease = function () {
  //       var colorCounter = this.get('colorCounter');

  //       colorCounter = ++colorCounter;
  //       this.set('colorCounter', colorCounter);
  //       observer.pub('counter-increased', self);

  //       return colorCounter;
  //   }; 
    
  //   this.toJSON = function () {
  //       var colorsJSON = {
  //               color: this.get('color'),
  //               counter: this.get('colorCounter'),
  //       };

  //       return colorsJSON;
  //   };
    
  //   this.sub = function (ev, fn) {
  //       observer.sub(ev, fn); 
  //   }
  //   return this;
// }
