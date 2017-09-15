var AjaxRequest = require('./services/ajax_request');


var app = function(){
    
    var ajaxRequest = new AjaxRequest('http://localhost:3001/api/languages');
}

window.addEventListener('load', app);