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
        var changedStudentDetails = {
                                     name: this.$('[name="name"]').val(),
                                     lastName: this.$('[name="lastName"]').val(),
                                     gender: this.$('[name="gender"]').val(),
                                     skype: this.$('[name="skype"]').val()
                                    }

        this.currentStudent.set(changedStudentDetails);
    }
});

