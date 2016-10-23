'use strict';
var StudentContainer = Backbone.Collection.extend({
    model: Student,
    url: '/getStudents'
});
       