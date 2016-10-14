'use strict';
var ShowStudentDetails = Backbone.View.extend({
    tagName: 'div',
    className: 'contDetails',
    
    initialize: function () {
        mediator.sub('student-selected', this.renderDetails.bind(this));
    },    

    render: function () {
       
        return this;
    },

    renderDetails: function (student) {
        this.$el.html(detailsTemplate(student.toJSON()));
        this.$el.find('.edit').click($.proxy(this.renderEditibleDetails, this, student));
    },

    renderEditibleDetails: function (student) {
        this.$el.html(editTemplate(student.toJSON()));
        this.$el.find('.save').click($.proxy(this.saveEditedList, this, student));
    },
        
    saveEditedList: function  (student) {
        student.set('name', $('input[name="name"]').val());
        student.set('lastName', $('input[name="lastName"]').val());
        student.set('gender', $('input[name="gender"]').val());
        student.set('skype', $('input[name="skype"]').val());
    }
});

