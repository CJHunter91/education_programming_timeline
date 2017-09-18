var AjaxRequest = require('../services/ajax_request');
var IndivLangView = require('./indiv_lang_view');
var TimelineView = function() {

}

TimelineView.prototype.render = function(data) {
  var section = document.getElementById('timeline');
  var ol = document.createElement('ol');
  var indivLangView = new IndivLangView();
  //loop through each language
  data.forEach(function(language) {
    var li = document.createElement('li');
    li.innerHTML = `
    <a href="/" class="timeline-date"> ${language.year}</a>`;
    li.style.backgroundImage = "url(${language.icon})";
    //adds click handler to each language element
    li.addEventListener('click', function(event){
      event.preventDefault();
      var ajaxLangRequest = new AjaxRequest('http://localhost:3000/api/languages/' + parseInt(language.id));
      ajaxLangRequest.get(indivLangView.render);
    }.bind(this));
    //append to the list
    ol.appendChild(li);
  });
  section.appendChild(ol);
} 


  module.exports = TimelineView;




