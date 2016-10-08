'use strict';
 function Student () {
 	var attributes = {},
        observer;
   
	observer = new Mediator();
    
    this.set = function (key, value) {
        attributes[key] = value;
    };

    this.get = function (key) {
                      
        return attributes[key];
    };

    this.toJSON = function () {
        var studentJSON = {
                name: this.get('name'),
                lastName: this.get('lastName'),
                gender: this.get('gender'),
                skype: this.get('skype')
        };

        return studentJSON;
    };

    this.sub = function (ev, fn) {
        observer.sub(ev, fn); 
    }

    this.save = function () {
        observer.pub('student-changed', this);
    };

    this.delete = function () {
        observer.pub('student-deleted', this);
    };

    return this;
}
