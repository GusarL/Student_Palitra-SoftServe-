'use strict';
var OneColorView = Backbone.View.extend({
	tagName: 'li',
   	    
	events: {
        'click': 'increaseStatistic'
    },

    render: function () {
        var color = this.model.get('color');

        this.$el.text(color.toUpperCase());
        this.$el.addClass(color);

        return this;
    },
 
    increaseStatistic: function () {
        var increasedCounter;

        mediator.pub('color-selected', this.model.get('color'));
        increasedCounter = this.model.counterIncrease();
        this.model.set('colorCounter', increasedCounter);
    }
});


