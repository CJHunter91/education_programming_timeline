var AjaxRequest = require('../services/ajax_request');
var LanguagesView = function() {

}

LanguagesView.prototype.render = function(data) {
    var section = document.getElementById('language-sidebar');
    var ul = document.createElement('ul');
    data.forEach(function(language) {
        var li = document.createElement('li');
        li.innerText = language.language;
        ul.appendChild(li);
    });
    section.appendChild(ul);
}  

module.exports = LanguagesView;




