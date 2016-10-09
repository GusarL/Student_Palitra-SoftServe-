'use strict';
function extend (child, parent) {
    
    function MiddleEmptyObject () {};
    MiddleEmptyObject.prototype = parent.prototype;
    
    child.prototype = new MiddleEmptyObject();
    child.prototype.constructor = child;
}
// var extend = (function () {
//   var Surrogate = function () {};
//   return function (Base, Sub) {
//     Surrogate.prototype = Base.prototype;
//     Sub.prototype = new Surrogate();
//     Sub.prototype.constructor = Sub;
//   };
// })();