'use strict';
function Collection () {
    var studentList,
        observer,
        self = this;
  
    observer = new Mediator();

    this.studentsInit = function (dataStudents) {
        var dataStudentList = JSON.parse(dataStudents),
            students = [];
          
        dataStudentList.forEach(function (elem, i) {
            var item = new Student();
               
            item.set('name', elem[0]); 
            item.set('lastName', elem[1]);
            item.set('gender', elem[2]);
            item.set('skype', elem[3]);

            students.push(item);
        });
// console.log(students[0].toJSON());
// console.log(students[1].toJSON());
        studentList = students;
        observer.pub('collection-inited', self); 
    };

    ajax.load('students', this.studentsInit);

	this.forEach = function (iterator){
        studentList.forEach(iterator);    
    };

    this.remove = function (deletedStudent) {
        studentList.splice(students.indexOf(deletedStudent), 1);
    };
    
    this.sub = function (ev, fn) {
        observer.sub(ev, fn); 
    }
    
    return this;
}