'use strict';
var ShowStudentDetails = Backbone.View.extend({
    tagName: 'div',
    className: 'contDetails',
    
    events: {
        'click .edit': 'renderEditibleDetails',
        'click .save': 'saveEditedList'
    },

    initialize: function () {
        mediator.sub('student-selected', this.renderDetails.bind(this));
    },    

    render: function () {
       
        return this;
    },

    renderDetails: function (student) {
        var compiled = _.template(tpl.detailsStudents);
        
        this.currentStudent = student;
        this.$el.html(compiled(this.currentStudent.toJSON()));
    },

    renderEditibleDetails: function () {
        var compiled = _.template(tpl.editStudent);
        
        this.$el.html(compiled(this.currentStudent.toJSON()));
    },
        
    saveEditedList: function  () {
        this.currentStudent.set({name: $('[name="name"]').val(),
                     lastName: $('[name="lastName"]').val(),
                     gender: $('[name="gender"]').val(),
                     skype: $('[name="skype"]').val()});
    }
});

