'use strict';
var StudentsListView = Backbone.View.extend({
    tagName: 'ul',
    className: 'list',
    
    initialize: function () {
        this.collection.on('sync', this.render, this);
    },
    
    render: function () {
        this.collection.forEach(this.addLi, this);

        return this;
    },
    
    addLi: function (student) {
        var item;
         
        item = new OneStudentView({model: student});
        this.$el.append(item.render().el);
    }
});

