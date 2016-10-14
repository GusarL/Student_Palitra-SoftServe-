'use strict';
var StudentContainer = Backbone.Collection.extend({
    model: Student,
    url: '/getStudents',
    
    initialize: function () {
        this.fetch();
    } 
});
       