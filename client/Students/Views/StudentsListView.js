'use strict';
var StudentsListView = Backbone.View.extend({
    tagName: 'ul',
    className: 'list',
        
    render: function () {
        this.collection.forEach(function (student) {  
            this.addItem(student);
        }, this);

        return this;
    },
    
    addItem: function (student) {
        var item = new OneStudentView({model: student});

        this.$el.append(item.render().el);
    }
});

