'use strict';
var Student = (function () {
              
                    function S () {
                        ModelSC.apply(this, null); 
                    }
                    
                    extend(S, ModelSC);

                    function _save () {
                        observer.pub('student-changed', this);
                    };

                    function _delete  () {
                        observer.pub('student-deleted', this);
                    };

                    S.prototype.save = _save;
                    S.prototype.delete = _delete;

                    return S;
                })();
// var Student  = function () {
//     ModelSC.apply(this, null);
    
//     return this;
// }
//     extend(Student, ModelSC);

    // function _save () {
    //     observer.pub('student-changed', this);
    // };

    // function _delete  () {
    //     observer.pub('student-deleted', this);
    // };

    // Student.prototype.save = _save;
    // Student.prototype.delete = _delete;

    

