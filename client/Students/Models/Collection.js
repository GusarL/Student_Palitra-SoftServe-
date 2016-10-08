'use strict';
function Collection () {
    var students = [],
        observer,
        self = this;
  
    observer = new Mediator();

    this.studentsInit = function (dataStudents) {
        var dataStudentList = JSON.parse(dataStudents);
          
        dataStudentList.forEach(function (elem, i) {
            var item = new Student();
             
            item.set('name', elem[0]);
            item.set('lastName', elem[1]);
            item.set('gender', elem[2]);
            item.set('skype', elem[3]);

            students.push(item);
        });

        observer.pub('collection-inited', self); 
    }

    ajax.load('students', this.studentsInit);

	this.forEach = function (iterator){
        students.forEach(iterator);    
    };

    this.remove = function (deletedStudent) {
        students.splice(students.indexOf(deletedStudent), 1);
    };
    
    this.sub = function (ev, fn) {
        observer.sub(ev, fn); 
    }
    
    return this;
}