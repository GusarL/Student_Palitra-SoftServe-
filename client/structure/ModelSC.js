'use strict';
var ModelSC = (function () {
			   
			    function Model () {
				    var attributes = {};                           
	                this.observer = new Mediator();

					this.set = function (key, value) {
				        attributes[key] = value;
				    };

				    this.get = function (key) {
				                      
				        return attributes[key];
				    };

				    this.toJSON = function () {
				    	var names = Object.keys(attributes),
				    	    studentJSON = {},
				    	    self = this;
	                  
	                    names.forEach(function (elem) {

		                    for (var key in attributes) {
							    studentJSON[elem] = self.get(elem);
							}
	                    	
	                    });
				    	
				        return studentJSON;
				    };
	            }
                
			    function _sub (ev, fn) { 
			        this.observer.sub(ev, fn); 
     		    }
				
			    Model.prototype.sub = _sub;
			    
			    return Model;
            })();
