'use strict';
function StudentController () {
    var studentCollection,
        containerStudent,
        studentsDetails,
        studentsList;
          
    studentCollection = new StudentContainer();
    
    containerStudent = document.getElementById('containerStudent');
    
    studentsList = new StudentsListView({collection: studentCollection});
    studentsDetails = new ShowStudentDetails(); 

    $('#containerStudent').append(studentsList.render().el);
    $('#containerStudent').append(studentsDetails.render().el);
       
    return this;
}