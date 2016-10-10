'use strict';
var ColorContainer = (function () {
              
                    function CC () {
                        ContainerSC.apply(this, null); 
                    }
                    
                    extend(CC, ContainerSC);

                     function _initContainer () {
                        var colors = this.collection,
                            observer = this.observer,
                            self = this;

                        ajax.load('colors', function (dataColors) {
                            var dataColorsList = JSON.parse(dataColors);
                                                                                         
                            dataColorsList.forEach(function (elem, i) {
                                var item = new Color();
                                           
                                item.set('color', elem);
                                item.set('colorCounter', 0);

                                colors.push(item);
                            });
                            observer.pub('collection-inited', self); 
                        });
                    } 

                    CC.prototype.initContainer = _initContainer;
                    
                    return CC;
                })();

