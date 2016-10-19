'use strict';
var ColorsListView = Backbone.View.extend({
    tagName: 'ul',
    className: 'list',
	
    initialize: function () {
        this.listenTo(this.collection, 'add', this.addItem);
    },
           
    render: function () {
        return this;
    },

    addItem: function (color) {
        var item = new OneColorView({model: color});
        this.$el.append(item.render().el);
    }
});
