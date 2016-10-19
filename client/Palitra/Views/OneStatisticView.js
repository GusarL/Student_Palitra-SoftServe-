'use strict';
var OneStatisticView = Backbone.View.extend({
	tagName: 'li',
   	
    initialize: function () {
        this.listenTo(this.model, 'change:colorCounter', this.changeStatistic);
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

