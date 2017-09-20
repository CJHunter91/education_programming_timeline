var AjaxRequest = require('./services/ajax_request');
var setBtnState = require('./services/timeline_animation').setBtnState;
var LanguageView = require('./views/languages_view');
var IndivLangView = require('./views/indiv_lang_view');
var TimelineView = require('./views/timeline_view');
var TextView = require('./views/text_view');

var app = function(){

    var ajaxRequest = new AjaxRequest('http://localhost:3000/api/languages');
    var ajaxTextRequest = new AjaxRequest('http://localhost:3000/api/text/History');
    var timelineView = new TimelineView();
    var textView = new TextView();
    

    var buttonSetter = function (){
        var forward = document.getElementById('forward');
        var back = document.getElementById('back');
        back.disabled = true;

        forward.addEventListener('click', buttonHandler);
        back.addEventListener('click', buttonHandler);
    }
    //sets forward and back to change view
    buttonSetter();
    //ready for history text request
    //adds timeLineView
    ajaxTextRequest.get(textView.render);

    ajaxRequest.get(timelineView.render)
    //pass the get a view callback
    // ajaxRequest.get(languageView.render);
 
}

// var setBtnState = function(element, flag = true) {
//   if (flag) {
//     element.classList.add('disabled');
//     element.disabled = true
//   } else {
//     if (element.classList.contains('disabled')) {
//       element.classList.remove('disabled');
//     }
//     element.disabled = false;
//   }
// }


var buttonHandler = function(){
    var forward = document.getElementById('forward');
    var back = document.getElementById('back');
    var indivLangView = new IndivLangView();
    var url = 'http://localhost:3000/api/languages/';
    const modifier = (this.classList.contains("prev-arrow")) ? -1 : 1;
    if(document.querySelector('#language-id')){

        var nextId = parseInt(document.querySelector('#language-id').textContent) + modifier;
        var request = new AjaxRequest(url + parseInt(nextId));
        request.get(indivLangView.render);
        setBtnState(forward, false);
        setBtnState(back, false);
        console.log(nextId)
        if(nextId + 1 === 13){
            setBtnState(forward);
        }
        else if(nextId - 1 === 0){
            setBtnState(back);
        }
    }
    else{
     var request = new AjaxRequest(url + parseInt(1));
     request.get(indivLangView.render); 
    setBtnState(back, false);
 }

}

window.addEventListener('load', app);