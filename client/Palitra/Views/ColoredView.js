'use strict';
var ColoredView = Backbone.View.extend({
    tagName: 'div',
    
    initialize: function () {
         mediator.sub('color-selected', this.changeColor.bind(this));
    },

    render: function () {
    	return this;
    },

    changeColor: function (color) {
        this.el.className = color;
    }
});
