'use strict';
var StatisticView = Backbone.View.extend({
	tagName: 'ul',
    
    initialize: function () {
        this.collection.on('sync', this.render, this);
    },

    render: function () {
        this.collection.forEach(this.addLi, this);

        return this;
    },
    
    addLi: function (color) {
        var item = new OneStatisticView({model: color});
        
        this.$el.append(item.render().el);
    }
});

