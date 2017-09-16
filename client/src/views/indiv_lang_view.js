var AjaxRequest = require('../services/ajax_request');
var IndivLangView = function() {

}

IndivLangView.prototype.render = function(language) {
    var section = document.getElementById('main-view');

    //create elements

    var title = document.createElement('h2');
    var author = document.createElement('h3');
    var desc = document.createElement('p');
    var year = document.createElement('p');
    var usedBy = document.createElement('p');
    var usedFor = document.createElement('p');
    var exCode = document.createElement('p');
    var docs = document.createElement('p');
    var linksList = document.createElement('ul');
    var prosList = document.createElement('ul');
    var consList = document.createElement('ul');
    var popularity = document.createElement('section')

    //adding data
    title.innerText = language.language;
    author.innerText = language.author;
    desc.innerText = language.description;
    year.innerText = language.year;
    usedBy.innerText = language.usedBy;
    usedFor.innerText = language.usedFor;
    exCode.innerText = language.exampleCode;
    docs.innerText = language.documentation[0];
    

    //appending tags
    section.appendChild(title);
    section.appendChild(author);
    section.appendChild(desc);
    section.appendChild(year);
    section.appendChild(usedBy);
    section.appendChild(usedFor);
    section.appendChild(linksList);
    section.appendChild(prosList);
    section.appendChild(consList);
    section.appendChild(popularity);
    
    language.pros.forEach(function(pro){
        var proLi = document.createElement('li');
        proLi.innerText = pro; 
        prosList.appendChild(pro);
    })
} 

module.exports = IndivLangView;

