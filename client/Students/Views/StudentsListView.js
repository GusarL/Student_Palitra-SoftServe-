'use strict';
var StudentsListView = Backbone.View.extend({
    tagName: 'ul',
    className: 'list',
    
    initialize: function () {
        this.listenTo(this.collection, 'add', this.addItem);
    },
    
    render: function () {
        return this;
    },
    
    addItem: function (student) {
        var item = new OneStudentView({model: student});

        this.$el.append(item.render().el);
    }
});

