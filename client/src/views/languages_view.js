var AjaxRequest = require('../services/ajax_request');
var IndivLangView = require('./indiv_lang_view');
var LanguagesView = function() {

}

LanguagesView.prototype.render = function(data) {
  var section = document.getElementById('language-sidebar');
  var ul = document.createElement('ul');
  var indivLangView = new IndivLangView();
  //loop through each language
  data.forEach(function(language) {
    var li = document.createElement('li');
    li.innerHTML = `
    <a href="/" class="btn btn-default"> ${language.language} <img src=${language.icon}></a>`;
    //adds click handler to each language element
    li.addEventListener('click', function(event){
      event.preventDefault();
      var ajaxLangRequest = new AjaxRequest('http://localhost:3000/api/languages/' + parseInt(language.id));
      ajaxLangRequest.get(indivLangView.render);
    }.bind(this));
    //append to the list
    ul.appendChild(li);
  });
  section.appendChild(ul);
} 


module.exports = LanguagesView;




