'use strict';
function StudentsListView (studentCollection) {
    var showStudentsList,
        parentElem,
        studentSet;
        
    studentCollection.sub('collection-inited', showStudentsList);
         
    parentElem = document.createElement('div');
    parentElem.className = 'studentList';
    studentSet = document.createElement('ul');
    studentSet.className = 'list';
    
    function showStudentsList (studentCollection) {  
        removeElement();

        studentCollection.forEach(function (elem) {
            var item;
         
            item = new OneStudentView(elem, studentCollection);
            elem.sub('student-deleted', studentCollection.remove); 
            item.render();

            studentSet.appendChild(item.getElement());
        });
                           
        parentElem.appendChild(studentSet);
    }
    
    function removeElement () {
        var isEmpty = studentSet.childNodes.length;

        if (isEmpty) {
            var showedList =  studentSet.querySelectorAll('.studentLi');

            [].forEach.call (showedList, function (elem, i) {
                elem.remove();
            });    
        }
    } 

    this.getElement = function() {
        return parentElem;
    }; 

	return this;
}