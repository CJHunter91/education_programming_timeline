var AjaxRequest = require('./services/ajax_request');
var LanguageView = require('./views/languages_view');

var app = function(){
    
    var ajaxRequest = new AjaxRequest('http://localhost:3000/api/languages');
    var languageView = new LanguageView();
    //call view pass 


    //pass the get a view callback
    ajaxRequest.get(languageView.render);
    
}

window.addEventListener('load', app);