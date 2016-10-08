'use strict';
function ShowStudentDetails (students) {
    var contDetails;
        
    mediator.sub('student-selected', renderStudentsDetails);

    contDetails = document.createElement('div');
    contDetails.className = 'contDetails';

    function renderStudentsDetails (student) {
        var newLiDetails = '',
            editButton;
           
        contDetails.classList.remove('contEditibleDetails');
        contDetails.className = 'contDetails';
        
        contDetails.innerHTML = detailsTemplate(student.toJSON());

        editButton = contDetails.querySelector('.edit');
        editButton.addEventListener('click', renderEditibleDetails, false);
        
        function renderEditibleDetails () {
            var saveButton,
                container;
            
            contDetails.classList.remove('contDetails'); 
            contDetails.className = 'contEditibleDetails';
            contDetails.innerHTML = editTemplate(student.toJSON());

            saveButton = contDetails.querySelector('.save');
            
            saveButton.addEventListener('click', saveEditedList, false);
        }
        
        function saveEditedList  () {
            var inputList,
                detail;

            inputList = contDetails.getElementsByTagName('input');

            [].forEach.call (inputList, function (elem) {
                if (elem.getAttribute('name') === 'name') { 
                     student.set('name', elem.value);
                }
                if (elem.getAttribute('name') === 'lastName') { 
                     student.set('lastName', elem.value);
                }
                if (elem.getAttribute('name') === 'gender') { 
                     student.set('gender', elem.value);
                }
                if (elem.getAttribute('name') === 'skype') { 
                     student.set('skype', elem.value);
                }
            });
            student.save();
        }
    };
       
    function removeElement (parentElement, className) {
        var needRemove;
        needRemove = parentElement.getElementsByClassName(className)[0];          
                   
        if (needRemove) {
            needRemove.remove();
        }
    } 
    
    this.getElement = function() {
        return contDetails;
    }; 

   	return this;
} 