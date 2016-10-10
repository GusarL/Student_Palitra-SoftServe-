'use strict';
var StudentContainer = (function () {
                  
                            function SC () {
                                ContainerSC.apply(this, null); 
                            }
                            
                            extend(SC, ContainerSC);
                           
                            function _studentsInit () {
                                var students = this.collection,
                                    observer = this.observer,
                                    self = this;

                                ajax.load('students', function (dataStudents) {
                                    var dataStudentList = JSON.parse(dataStudents);
                                                                                         
                                    dataStudentList.forEach(function (elem, i) {
                                        var item = new Student();
                                           
                                        item.set('name', elem[0]); 
                                        item.set('lastName', elem[1]);
                                        item.set('gender', elem[2]);
                                        item.set('skype', elem[3]);

                                        students.push(item);
                                    });
                                    observer.pub('collection-inited', self); 
                                });
                            } 

                            function _remove (deletedStudent) {console.log(this);
                                var students = this.collection;
                                students.splice(students.indexOf(deletedStudent), 1);
                            }
                           
                            SC.prototype.studentsInit = _studentsInit;
                            SC.prototype.remove = _remove;
      
                            return SC;
                        })();

