var AjaxRequest = require('../services/ajax_request');
var LanguagesView = function() {

}

LanguagesView.prototype.render = function(data) {
    var section = document.getElementById('language-sidebar');
    var ul = document.createElement('ul');
    data.forEach(function(language) {
        var li = document.createElement('li');
        li.innerHTML = `<a href="/" class="btn btn-default"> ${language.language} </a>`;
        ul.appendChild(li);
    });
    section.appendChild(ul);
}  

module.exports = LanguagesView;




