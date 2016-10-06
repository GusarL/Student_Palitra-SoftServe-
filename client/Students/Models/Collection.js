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
             
            item.setName(elem[0]);
            item.setLastName(elem[1]);
            item.setGender(elem[2]);
            item.setSkype(elem[3]);
            
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