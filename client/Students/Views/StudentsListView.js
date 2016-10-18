'use strict';
var StudentsListView = Backbone.View.extend({
    tagName: 'ul',
    className: 'list',
    
    initialize: function () {
        this.collection.on('add', this.addLi, this);
    },
    
    render: function () {
        return this;
    },
    
    addLi: function (student) {
        var item = new OneStudentView({model: student});

        this.$el.append(item.render().el);
    }
});

