'use strict';
var ajax = (function () {
    var routes = {
        'students': '/getStudents'
    };

    function _load (name, handleData) {
        var xhr = new XMLHttpRequest();

        xhr.open('GET', _uri(name), true);

        xhr.addEventListener('readystatechange', function () {console.log('readystatechange')
            
            if (xhr.readyState != 4) return;

            if (xhr.readyState === 4 && xhr.status === 200) {
                handleData(xhr.responseText);console.log(xhr.responseText);
            } else {
                    console.log('Ошибка ' + xhr.status + ': ' + xhr.statusText);    
            }
        }, false);

        xhr.send();
    }

    function _uri(name) {
        return routes[name];
    }

    return {
        load: _load
    };
})();
        
    
  

   