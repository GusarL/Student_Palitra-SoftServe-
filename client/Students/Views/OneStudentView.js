'use strict';
var OneStudentView = Backbone.View.extend({
    tagName: 'li',
    className: 'studentLi',

    initialize: function () {
        this.model.on('change', this.render, this);
    },

    events: {
        'click': 'studentSelected',
        'click .deleteButton': 'deleteElement'
    },

    render: function () {
        
        this.$el.html(liTemplate(this.model.toJSON()));

        return this;
    },

    studentSelected: function () {
        mediator.pub('student-selected', this.model);
    },

    deleteElement: function (event) {
        event.stopPropagation();
        this.el.remove();
        this.model.destroy();
    }
});

