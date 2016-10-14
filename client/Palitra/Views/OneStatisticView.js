'use strict';
var OneStatisticView = Backbone.View.extend({
	tagName: 'li',
   	
    initialize: function () {
        this.model.on('change:colorCounter', this.changeStatistic, this);

    },
   
	render: function () {
        var color = this.model.get('color');

        this.$el.addClass(color);
        this.$el.html(color + ' - ' + createStatisticHTML(this.model));
       
        this.changeStatistic();

        return this;
    }, 

    changeStatistic: function () {
        
        this.$el.find('.count').text(this.model.get('colorCounter'));
    }
        
   
});

