var AjaxRequest = require('./services/ajax_request');


var app = function(){
    
    var ajaxRequest = new AjaxRequest('http://localhost:3000/api/languages');

    ajaxRequest.get();
}

window.addEventListener('load', app);