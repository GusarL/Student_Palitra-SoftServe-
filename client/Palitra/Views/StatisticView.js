'use strict';
var StatisticView = Backbone.View.extend({
	tagName: 'ul',
    
    initialize: function () {
        this.listenTo(this.collection, 'add', this.addItem);
    },

    render: function () {
        return this;
    },
    
    addItem: function (color) {
        var item = new OneStatisticView({model: color});
        
        this.$el.append(item.render().el);
    }
});

