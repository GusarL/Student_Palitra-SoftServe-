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
                        this.observer.pub('counter-increased', this);

                        return colorCounter;
                    };

                    C.prototype.counterIncrease = _counterIncrease;
                    
                    return C;
                })();
