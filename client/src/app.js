var AjaxRequest = require('./services/ajax_request');
var LanguageView = require('./views/languages_view');
var IndivLangView = require('./views/indiv_lang_view');
var TextView = require('./views/text_view');

var app = function(){
    
    var ajaxRequest = new AjaxRequest('http://localhost:3000/api/languages');
    var ajaxTextRequest = new AjaxRequest('http://localhost:3000/api/text/History');
    var indivLangView = new IndivLangView();
    var languageView = new LanguageView();
    var textView = new TextView();
    var rubyButton = document.querySelector('#ruby');
    //call view pass 


    //pass the get a view callback
    ajaxRequest.get(languageView.render);

    //ready for history text request
    // ajaxTextRequest.get(textView.render);

    //show the individual language on click
    rubyButton.addEventListener('click', function(e){
        e.preventDefault();
        var ajaxLangRequest = new AjaxRequest('http://localhost:3000/api/languages/1');
        ajaxLangRequest.get(indivLangView.render);
    })

    
}

window.addEventListener('load', app);