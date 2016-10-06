'use strict';
function OneStudentView (student, studentCollection) {
    var studentElement,
        deleteButton,
        detailsView; 

    student.sub('student-changed', changeStudent);
   
    this.render = function () {
        studentElement = document.createElement('li');
        studentElement.className = 'studentLi';
        studentElement.innerHTML = liTemplate(student.toJSON());
        
        deleteButton = studentElement.getElementsByClassName('deleteButton')[0];        
       
        studentElement.addEventListener('click', function () {
            mediator.pub('student-selected', student);
        }, false);
       
        deleteButton.addEventListener('click', deleteElement, false);
    }
   
    function deleteElement (event) {
        event.stopPropagation();
        studentElement.remove();
        studentCollection.remove(student);
    }
    
    function changeStudent () {
        studentElement.innerHTML = liTemplate(student.toJSON());
    }

    this.getElement = function() {
        return studentElement;
    };

    return this;
}