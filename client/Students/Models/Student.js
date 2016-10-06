'use strict';
 function Student () {
 	var name = '',
 	    lastName = '',
 	    gender = '',
 	    skype = '',
        observer;

	observer = new Mediator();
    
    this.setName = function (_name) {
        name = _name;
    };
    
    this.getName = function () {
        return name;
    };

    this.setLastName = function (_lastName) {
        lastName = _lastName;
    };
    
    this.getLastName = function () {
        return lastName;
    };

    this.setGender = function (_gender) {
        gender = _gender;
    };

    this.getGender = function () {
        return gender;
    };

    this.setSkype = function (_skype) {
        skype = _skype;
    };

    this.getSkype = function () {
        return skype;
    };

    this.toJSON = function () {
        var studentJSON = {
                name: this.getName(),
                lastName: this.getLastName(),
                gender: this.getGender(),
                skype: this.getSkype()
        };

        return studentJSON;
    };

    this.sub = function (ev, fn) {
        observer.sub(ev, fn); 
    }

    this.save = function () {
        observer.pub('student-changed', this);
    };

    return this;
}
