var AjaxRequest = require('./services/ajax_request');


var app = function(){
    
    var ajaxRequest = new AjaxRequest('http://localhost:3000/api/languages');
    //call view pass 

    //pass the get a view callback
    ajaxRequest.get();
}

window.addEventListener('load', app);