'use strict';
var OneStudentView = Backbone.View.extend({
    tagName: 'li',
    className: 'studentLi',

    events: {
        'click': 'studentSelected',
        'click .deleteButton': 'deleteElement'
    },

    initialize: function () {
        this.listenTo(this.model, 'change', this.render);
        mediator.sub('student-selectedURL', this.studentSelectedURL.bind(this));   
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
    },

    studentSelectedURL: function (student) {
        var studentIdentify = student.split('_'); 

        if (this.model.get('name') === studentIdentify[0] ||
            this.model.get('lastName') === studentIdentify[1]) { 

            mediator.pub('student-selected', this.model); 
           
        }
    }
});

