'use strict';
var Router = Backbone.Router.extend({
    routes: {
        '': 'index',
        'colors/:color': 'changeColor',
        'students/:student': 'selectedStudent',
        '*path': 'showErrorMessage'
    },
    initialize: function () {
        mediator.sub('color-selected', this.colorClick.bind(this));
        mediator.sub('student-selected', this.studentClick.bind(this));
    },

    index: function () {
        this.palitraStart = new PalitraController(),
        this.controllerStudents = new StudentController();
    },
    
    changeColor: function (color) {
        this.index();
    	mediator.pub('color-selected', color);
    },

    selectedStudent: function (student) {
        this.index();
        this.controllerStudents.laterCallback(function () {
            mediator.pub('student-selectedURL', student);
        });
        // mediator.pub('student-selectedURL', student);
    },

    colorClick: function (color) {
        this.navigate('colors/' + color);
    },
    
    studentClick: function (student) {
        this.navigate('students/' + student.get('name') + '_' +  student.get('lastName'));
        // this.navigate('students/' + student); 
    },

    showErrorMessage: function (error) {
        this.index();
        alert('Page ' + error + ' is not exist (((:');
    },
}); 