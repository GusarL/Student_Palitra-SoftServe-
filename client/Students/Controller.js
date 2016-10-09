'use strict';
function StudentController () {
    var studentCollection,
        containerStudent,
        studentsDetails,
        studentsList;
          
    studentCollection = new Collection();
//  studentCollection.forEach(function (elem) {
//     console.log(elem.toJSON());
// }); 
   
    containerStudent = document.getElementById('containerStudent');

    studentsList = new StudentsListView(studentCollection);
    studentsDetails = new ShowStudentDetails(studentCollection); 

    containerStudent.appendChild(studentsList.getElement());
    containerStudent.appendChild(studentsDetails.getElement());
    
    return this;
}