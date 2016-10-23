'use strict';
var mediator = new Mediator(),
    router = new Router();   

$(function start () {
    Backbone.history.start({pushState: true});
});

