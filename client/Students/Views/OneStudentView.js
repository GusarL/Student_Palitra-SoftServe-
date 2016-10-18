'use strict';
var OneStudentView = Backbone.View.extend({
    tagName: 'li',
    className: 'studentLi',

    events: {
        'click': 'studentSelected',
        'click .deleteButton': 'deleteElement'
    },

    initialize: function () {
        this.model.on('change', this.render, this);
    },

    render: function () {
        var compiled = _.template(tpl.oneStudentView);
        
        this.$el.html(compiled(this.model.toJSON()));

        return this;
    },

    studentSelected: function () {
        mediator.pub('student-selected', this.model);
    },

    deleteElement: function (event) {
        event.stopPropagation();
        this.remove();
        this.model.destroy();
    }
});

