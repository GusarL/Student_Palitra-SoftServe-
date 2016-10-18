'use strict';
var ColorsListView = Backbone.View.extend({
    tagName: 'ul',
    className: 'list',
	
    initialize: function () {
        this.collection.on('add', this.addLi, this);
    },
           
    render: function () {
        return this;
    },

    addLi: function (color) {
        var item = new OneColorView({model: color});
        this.$el.append(item.render().el);
    }
});
