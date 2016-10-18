'use strict';
var OneStatisticView = Backbone.View.extend({
	tagName: 'li',
   	
    initialize: function () {
        this.model.on('change:colorCounter', this.changeStatistic, this);
    },
   
	render: function () {
        var compiled = _.template(tpl.oneStatisticView);

        this.$el.html(compiled(this.model.toJSON()));
        this.changeStatistic();

        return this;
    }, 

    changeStatistic: function () {
        this.$el.find('.count').text(this.model.get('colorCounter'));
    }
});

