'use strict';
var Student = (function () {
              
                    function S () {
                        ModelSC.apply(this, null); 
                    }
                    
                    extend(S, ModelSC);

                    function _save () {
                        this.observer.pub('student-changed', this);
                    };

                    function _delete  () {
                        this.observer.pub('student-deleted', this);
                    };

                    S.prototype.save = _save;
                    S.prototype.delete = _delete;

                    return S;
                })();
