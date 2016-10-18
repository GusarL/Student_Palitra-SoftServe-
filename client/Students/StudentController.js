'use strict';
function StudentController () {
    var studentCollection,
        studentsDetails,
        studentsList;
          
    studentCollection = new StudentContainer();
    
    studentsList = new StudentsListView({collection: studentCollection});
    studentsDetails = new ShowStudentDetails(); 

    $('#containerStudent').append(studentsList.render().el);
    $('#containerStudent').append(studentsDetails.render().el);
       
    return this;
}