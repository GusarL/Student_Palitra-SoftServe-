'use strict';
function StudentController () {
    var studentCollection,
        containerStudent,
        studentsDetails,
        studentsList;
          
    studentCollection = new StudentContainer();
    studentCollection.studentsInit();
    containerStudent = document.getElementById('containerStudent');

    studentsList = new StudentsListView(studentCollection);
    studentsDetails = new ShowStudentDetails(studentCollection); 

    containerStudent.appendChild(studentsList.getElement());
    containerStudent.appendChild(studentsDetails.getElement());
    
    return this;
}