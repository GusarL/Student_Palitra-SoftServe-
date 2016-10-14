'use strict';
var Color = Backbone.Model.extend({
    defaults: {
        'color': '',
        'colorCounter': ''
    },
    counterIncrease: function () {
        var colorCounter = this.get('colorCounter');

        colorCounter = ++colorCounter;
        this.set('colorCounter', colorCounter);
        this.trigger('counter-increased');

        return colorCounter;
    }
})
           