'use strict';
var OneColorView = Backbone.View.extend({
	tagName: 'li',
   	    
	events: {
        'click': 'increaseStatistic'
    },

    render: function () {
        var compiled = _.template(tpl.oneColorView),
            el;

        this.$el.html(compiled(this.model.toJSON()));
        
        el = this.$el.find('.' + this.model.get('color'));
        el.text(el.text().toUpperCase());
        
        return this;
    },
 
    increaseStatistic: function () {
        mediator.pub('color-selected', this.model.get('color'));
        this.model.counterIncrease();
    }
});


