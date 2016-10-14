'use strict';
var ColorsListView = Backbone.View.extend({
    tagName: 'ul',
    className: 'list',
	
    initialize: function () {
        this.collection.on('sync', this.render, this);
    },
           
    render: function () {
        this.collection.forEach(this.addLi, this);

        return this;
    },

    addLi: function (color) {
        var item;
         
        item = new OneColorView({model: color});
        this.$el.append(item.render().el);
    }
});
