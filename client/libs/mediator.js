'use strict';
function Mediator () {
    var events = {};
	    
	this.sub = function (event, fn) {
	    events[event] = events[event] || [];
	    events[event].push(fn); 
	};
	   
	this.pub =  function (event, studentsCollectionEntity) {
	    events[event].forEach(function (fn) {
	        fn(studentsCollectionEntity);
	    });
	};

    return this;
}
