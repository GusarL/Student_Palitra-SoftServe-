'use strict';
function StudentController () {
    var studentCollection,
        studentsDetails,
        studentsList,
        callback,
        promise;
          
    studentCollection = new StudentContainer();
    
    promise = new Promise((resolve, reject) => {
        studentCollection.fetch();
        studentCollection.on('sync', resolve);
    }).then(onFulfilled, onRejected);     

    function onFulfilled () {
	    studentsList = new StudentsListView({collection: studentCollection});
	    studentsDetails = new ShowStudentDetails(); 

	    $('#containerStudent').append(studentsList.render().el);
	    $('#containerStudent').append(studentsDetails.render().el);
	    
	    if (callback){
	        callback();
	    }
	    // promise = new Promise((resolve, reject) => {
	    //     $('#containerStudent').append(studentsList.render().el);
	    //     $('#containerStudent').append(studentsDetails.render().el);
     //    }).then(callback, onRejected);  
	}

	function onRejected (error) {
        alert('There is no data.');
    }  

    this.laterCallback = function (_callback) {
        callback = _callback;
    }     
    return this;
}