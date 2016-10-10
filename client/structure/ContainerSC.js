'use strict';
var ContainerSC = (function () {
			  
			    function Container () {
				    this.collection = [];
				    
	                this.observer = new Mediator();
                }

   			    function _sub (ev, fn) { 
			        this.observer.sub(ev, fn); 
     		    }

				function _forEach  (iterator){
				    this.collection.forEach(iterator);    
				}

			    Container.prototype.sub = _sub;
			    Container.prototype.forEach = _forEach;
			    
			    return Container;
            })();
